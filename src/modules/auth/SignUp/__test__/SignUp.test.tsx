import { act, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import render from "shared/util/test/render";
import SignUp from "../SignUp";
import { CREATE_ACCOUNT_SUCCESS_RESPONSE_MOCK, EMAIL_REGISTERED_RESPONSE_MOCK, SIGNUP_MOCK } from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { fullName, email, password  } = SIGNUP_MOCK;

const LABEL_FULL_NAME = /full name/i;
const LABEL_EMAIL = /email/i;
const LABEL_PASSWORD = /password/i;

const EACH_AUTHENTICATION_REQUEST_CASES = [
	{
		status: 403,		
		mockData: EMAIL_REGISTERED_RESPONSE_MOCK,
		messageTest: EMAIL_REGISTERED_RESPONSE_MOCK.message,
	},
	{
		status: 201,		
		mockData: CREATE_ACCOUNT_SUCCESS_RESPONSE_MOCK,
		messageTest: CREATE_ACCOUNT_SUCCESS_RESPONSE_MOCK.message,
	},
];

describe("Component <SignUp />", () => {
	test("Should mount the component", () => {
		const { container } = render(<SignUp />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = render(<SignUp />);
		unmount();		
		expect(container).toBeEmptyDOMElement();
	});    

	test("Should show required message full name, email and password after submitting empty form", async () => {
		render(<SignUp />);
		const buttonSubmit = screen.getByRole("button", { name: "Sign up" });
		userEvent.click(buttonSubmit);

		const fullNameRequiredMessage = await screen.findByText(
			/full name is a required field/i
		);

		const emailRequiredMessage = await screen.findByText(
			/email is a required field/i
		);
		const passwordRequiredMessage = await screen.findByText(
			/password is a required field/i
		);

		expect(fullNameRequiredMessage).toBeInTheDocument();
		expect(emailRequiredMessage).toBeInTheDocument();
		expect(passwordRequiredMessage).toBeInTheDocument();
	});

	test.each(EACH_AUTHENTICATION_REQUEST_CASES)(
		"Should show message snackbar $messageTest",
		async ({ status, mockData }) => {
			mock.onPost("auth/create-account").reply(status, mockData);
			
			render(<SignUp />);
			await act(() => {
				const inputEmail = screen.getByLabelText(LABEL_EMAIL);
				userEvent.type(inputEmail, email);

				const inputFullname = screen.getByLabelText(LABEL_FULL_NAME);
				userEvent.type(inputFullname, fullName);

				const inputPassword = screen.getByLabelText(LABEL_PASSWORD) as any;
				userEvent.type(inputPassword, password);

				const buttonSubmit = screen.getByRole("button", {
					name: "Sign up",
				});
				userEvent.click(buttonSubmit);				
			});
			
			await waitFor(() => {
			 	const snackbarMessage = screen.getByText(mockData.message);				
				expect(snackbarMessage).toBeInTheDocument();
			});
		}
	);	
});