import { act, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import { EMAIL_MESSAGE_VALIDATION_MOCK, PASSWORD_MESSAGE_VALIDATION_MOCK } from "shared/util/test/message";
import render from "shared/util/test/render";
import SignIn from "../SignIn";
import { USER_NOT_EXIST_MOCK } from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { requiredEmail, validationEmail } = EMAIL_MESSAGE_VALIDATION_MOCK;
const { validationPassword } = PASSWORD_MESSAGE_VALIDATION_MOCK;

const LABEL_EMAIL = /email/i;
const LABEL_PASSWORD = /password/i;

const EACH_EMAIL_VALIDATION_CASES = [
	{ label: LABEL_EMAIL, value: "Email invalid", message: validationEmail },
	{ label: LABEL_EMAIL, value: "E", message: validationEmail },
	{ label: LABEL_EMAIL, value: "email@email.", message: validationEmail },
];

describe("Component <SignIn />", () => {
	test("Should mount the component", () => {
		const { container } = render(<SignIn />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { unmount } = render(<SignIn />);
		unmount();
	});

	test("Should show required message email and password after submit the form", async () => {
		render(<SignIn />);
		const buttonSubmit = screen.getByRole("button", { name: "Sign in" });
		userEvent.click(buttonSubmit);

		const emailRequiredMessage = await screen.findByText(requiredEmail);
		const passwordRequiredMessage = await screen.findByText(/password is a required field/i);

		expect(emailRequiredMessage).toBeInTheDocument();
		expect(passwordRequiredMessage).toBeInTheDocument();
	});

	test.each(EACH_EMAIL_VALIDATION_CASES)(
		"Should show validation message when write wrong email",
		async ({ label, value, message }) => {
			render(<SignIn />);
			const inputEmail = screen.getByLabelText(label);
			userEvent.type(inputEmail, value);

			const emailMessage = await screen.findByText(message);
			expect(emailMessage).toBeInTheDocument();
		}
	);

	test("Should show validation message when password is less than five characters", async () => {
		render(<SignIn />);
		const inputPassword = screen.getByLabelText(LABEL_PASSWORD);			
		userEvent.type(inputPassword, "1234");

		const passwordMessage = await screen.findByText(validationPassword);
		expect(passwordMessage).toBeInTheDocument();
	});

	test(`Should show message '${USER_NOT_EXIST_MOCK.message}' when the user does not exist`, async () => {
		mock.onPost("auth/login").reply(403, USER_NOT_EXIST_MOCK);
		
		render(<SignIn />);		
		await act(() => {
			const inputEmail = screen.getByLabelText(LABEL_EMAIL);
			userEvent.type(inputEmail, "email@email.com");
			const inputPassword = screen.getByLabelText(LABEL_PASSWORD);
			userEvent.type(inputPassword, "123456");			
				
			const buttonSubmit = screen.getByRole("button", { name: "Sign in" });
			userEvent.click(buttonSubmit);
		});

		await waitFor(() => {
		 	const snackbarMessage = screen.getByText(USER_NOT_EXIST_MOCK.message);		
		 	expect(snackbarMessage).toBeInTheDocument();
		});
	});	
});
