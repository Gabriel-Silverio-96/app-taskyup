import { cleanup, fireEvent, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import api from "shared/services/api";
import renderRequiredAuth from "shared/util/test/renderRequiredAuth";
import Board from "../Board";
import { BOARD_MOCK, CREATE_BOARD_SUCCESS_REPOSNSE_MOCK } from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { board_name, board_type_id } = BOARD_MOCK;

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

	test("Create new board type notes", async () => {
		mock.onPost("board/create").reply(201, CREATE_BOARD_SUCCESS_REPOSNSE_MOCK);
		renderRequiredAuth(<Board />);

		const buttonNewBoard = screen.getByRole("button", { name: "New board" });
		userEvent.click(buttonNewBoard);
		
		await act(() => {		
			const inputBoardName = screen.getByLabelText(LABEL_BOARD_NAME);
			userEvent.type(inputBoardName, board_name);

			const selectBoardType = screen.getByTestId("board-type-id-input-inside-select");
			fireEvent.change(selectBoardType, { target: { value: board_type_id.notes }});			
			
			const buttonSubmit = screen.getByRole("button", { name: "Save" });
			userEvent.click(buttonSubmit);			
		});

		await waitFor(() => {			
			const snackbarMessage = screen.getByText(CREATE_BOARD_SUCCESS_REPOSNSE_MOCK.message);
			expect(snackbarMessage).toBeInTheDocument();
		});				
	});
});
 