import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import render from "shared/utils/test/render";
import {
	renderRoutePath,
	routePathTest,
} from "shared/utils/test/renderRoutePath";
import ResetPassword from "../ResetPassword";
import {
	RESET_PASSWORD_MOCK,
	RESET_PASSWORD_SUCCESS_RESPONSE_MOCK,
} from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { token, password } = RESET_PASSWORD_MOCK;

const LABEL_PASSWORD = /password/i;

describe("Component <ResetPassword />", () => {
	test("Should mount the component", () => {
		const { container } = render(<ResetPassword />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = render(<ResetPassword />);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Should match url token with mock token", async () => {
		const history = routePathTest({
			route: `/auth/reset-password/${token}`,
		});
		renderRoutePath(<ResetPassword />, {
			path: "/auth/reset-password/:token",
			location: history.location,
			history,
		});
		const tokenURL = history.location.pathname.split("/").at(-1);

		expect(tokenURL).toEqual(token);
	});

	test("Should show success message when password was reseted", async () => {
		mock.onPost(`auth/reset-password/token=${token}`).reply(
			200,
			RESET_PASSWORD_SUCCESS_RESPONSE_MOCK
		);

		const history = routePathTest({
			route: `/auth/reset-password/${token}`,
		});
		renderRoutePath(<ResetPassword />, {
			path: "/auth/reset-password/:token",
			location: history.location,
			history,
		});

		const inputPassword = screen.getByLabelText(LABEL_PASSWORD);
		userEvent.type(inputPassword, password);

		const buttonSubmit = screen.getByRole("button", { name: "Save" });
		userEvent.click(buttonSubmit);

		await waitFor(async () => {
			const snackbarMessage = await screen.findByText(
				RESET_PASSWORD_SUCCESS_RESPONSE_MOCK.message
			);
			expect(snackbarMessage).toBeInTheDocument();
		});
	});
});
