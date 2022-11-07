import { cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils";
import api from "shared/services/api";
import render from "shared/util/test/render";
import ForgotPassword from "../ForgotPassword";
import { FORGOT_PASSWORD_MOCK, UNREGISTERED_USER_MOCK, REGISTERED_USER_MOCK } from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { email } = FORGOT_PASSWORD_MOCK;

const LABEL_EMAIL = /email/i;

describe("Component <ForgotPassword />", () => {
	test("Should mount the component", () => {
		const { container } = render(<ForgotPassword />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = render(<ForgotPassword />);
		unmount();		
		expect(container).toBeEmptyDOMElement();
	}); 

	test(`Should show message ${UNREGISTERED_USER_MOCK.message} when the user has no account`, async () => {
		mock.onPost("auth/forgot-password").reply(403, UNREGISTERED_USER_MOCK);

		render(<ForgotPassword />);
		await act(() => {
			const inputEmail = screen.getByLabelText(LABEL_EMAIL);
			userEvent.type(inputEmail, email);

			const buttonSubmit = screen.getByRole("button", { name: "Send" });		
			userEvent.click(buttonSubmit);
		});

		await waitFor(() => {
			const snackbarMessage = screen.getByText(UNREGISTERED_USER_MOCK.message);				
		   	expect(snackbarMessage).toBeInTheDocument();
	   });
	});

	test(`Should show message ${REGISTERED_USER_MOCK.message} when the user has account`, async () => {
		mock.onPost("auth/forgot-password").reply(200, REGISTERED_USER_MOCK);

		const { container } = render(<ForgotPassword />);
		await act(() => {
			const inputEmail = screen.getByLabelText(LABEL_EMAIL);
			userEvent.type(inputEmail, email);				
			
			const buttonSubmit = screen.getByRole("button", { name: "Send" });		
			userEvent.click(buttonSubmit);
		});

		await waitFor(() => {
			const snackbarMessage = screen.getByText(REGISTERED_USER_MOCK.message);				
			expect(snackbarMessage).toBeInTheDocument();

			const form = container.querySelector("form");
			expect(form).not.toBeInTheDocument();
	   });
	});
});