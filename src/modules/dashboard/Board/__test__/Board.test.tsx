import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import renderRequiredAuth from "shared/utils/test/renderRequiredAuth";
import Board from "../Board";
import {
	BOARD_MOCK,
	CREATE_BOARD_SUCCESS_RESPONSE_MOCK,
	EDIT_BOARD_DATA_MOCK,
	LIST_BOARD_MOCK_SUCCESS_RESPONSE_MOCK,
	EDIT_BOARD_SUCCESS_RESPONSE_MOCK,
} from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { board_name, board_name_edited, board_type_id } = BOARD_MOCK;

const LABEL_BOARD_NAME = /board name/i;

describe("Component <Board />", () => {
	test("Should mount the component", () => {
		const { container } = renderRequiredAuth(<Board />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = renderRequiredAuth(<Board />);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Create board", async () => {
		mock.onPost("board/create").reply(
			201,
			CREATE_BOARD_SUCCESS_RESPONSE_MOCK
		);
		mock.onGet("board").reply(200, LIST_BOARD_MOCK_SUCCESS_RESPONSE_MOCK);

		renderRequiredAuth(<Board />);

		const buttonNewBoard = screen.getByRole("button", {
			name: "New board",
		});
		userEvent.click(buttonNewBoard);

		await waitFor(() => {
			const inputBoardName = screen.getByLabelText(LABEL_BOARD_NAME);
			userEvent.type(inputBoardName, board_name);

			const selectBoardType = screen.getByTestId(
				"board-type-id-input-inside-select"
			);
			fireEvent.change(selectBoardType, {
				target: { value: board_type_id.notes },
			});

			const buttonSubmit = screen.getByRole("button", { name: "Save" });
			userEvent.click(buttonSubmit);
		});

		await waitFor(() => {
			const snackbarMessage = screen.getByText(
				CREATE_BOARD_SUCCESS_RESPONSE_MOCK.message
			);
			expect(snackbarMessage).toBeInTheDocument();

			const boardTitleWasCreated = screen.getByText(
				LIST_BOARD_MOCK_SUCCESS_RESPONSE_MOCK[0].title
			);
			expect(boardTitleWasCreated).toBeInTheDocument();
		});
	});

	test("Edit board", async () => {
		mock.onGet("board").reply(200, LIST_BOARD_MOCK_SUCCESS_RESPONSE_MOCK);
		renderRequiredAuth(<Board />);

		const urlGetBoard = `board/board_id=${EDIT_BOARD_DATA_MOCK.board_id}`;
		mock.onGet(urlGetBoard).reply(200, EDIT_BOARD_DATA_MOCK);

		const urlPatchBoard = `board/edit/board_id=${EDIT_BOARD_DATA_MOCK.board_id}`;
		mock.onPatch(urlPatchBoard).reply(
			201,
			EDIT_BOARD_SUCCESS_RESPONSE_MOCK
		);

		await waitFor(() => {
			const buttonCardBoardOption = screen
				.getAllByTestId("button-card-board-options")
				.at(0) as HTMLButtonElement;

			userEvent.click(buttonCardBoardOption);

			const optionEditBoard = screen.getByText("Edit");
			userEvent.click(optionEditBoard);
		});

		await waitFor(() => {
			const inputBoardName =
				screen.getByTestId<HTMLInputElement>("input-edit");
			userEvent.type(inputBoardName, board_name_edited);

			const buttonSave = screen.getByRole("button", { name: "Save" });
			userEvent.click(buttonSave);
		});

		await waitFor(async () => {
			const snackbarMessage = await screen.findByText(
				EDIT_BOARD_SUCCESS_RESPONSE_MOCK.message
			);
			expect(snackbarMessage).toBeInTheDocument();
		});
	});
});
