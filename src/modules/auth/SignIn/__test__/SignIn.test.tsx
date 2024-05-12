import { act, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MockAdapter from "axios-mock-adapter";
import api from "shared/services/api";
import render from "shared/utils/test/render";
import SignIn from "../SignIn";
import {
	SIGNIN_MOCK,
	AUTHENTICATION_SUCCESS_RESPONSE_MOCK,
	INCORRECT_EMAIL_PASSWORD_RESPONSE_MOCK,
	USER_NOT_EXIST_RESPONSE_MOCK,
} from "./mock";

const mock = new MockAdapter(api);
beforeAll(() => mock.reset());
afterEach(cleanup);

const { email, password, fullName } = SIGNIN_MOCK;

const LABEL_EMAIL = /email/i;
const LABEL_PASSWORD = /password/i;

const TEST_CASES_EMAIL_VALIDATION = [
	{
		label: LABEL_EMAIL,
		value: fullName,
		messageTest:
			"Should show validation message when written a value other than email",
	},
	{
		label: LABEL_EMAIL,
		value: email.slice(0, -3),
		messageTest: "Should show validation message when written in half",
	},
];

const TEST_CASES_AUTHENTICATION_REQUEST = [
	{
		status: 403,
		mockData: USER_NOT_EXIST_RESPONSE_MOCK,
		messageTest: USER_NOT_EXIST_RESPONSE_MOCK.message,
	},
	{
		status: 403,
		mockData: INCORRECT_EMAIL_PASSWORD_RESPONSE_MOCK,
		messageTest: INCORRECT_EMAIL_PASSWORD_RESPONSE_MOCK.message,
	},
	{
		status: 200,
		mockData: AUTHENTICATION_SUCCESS_RESPONSE_MOCK,
		messageTest: AUTHENTICATION_SUCCESS_RESPONSE_MOCK.message,
	},
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

	test("Should show required message email and password after submitting empty form", async () => {
		render(<SignIn />);
		const buttonSubmit = screen.getByRole("button", { name: "Sign in" });
		userEvent.click(buttonSubmit);

		const emailRequiredMessage = await screen.findByText(
			/email is a required field/i
		);
		const passwordRequiredMessage = await screen.findByText(
			/password is a required field/i
		);

		expect(emailRequiredMessage).toBeInTheDocument();
		expect(passwordRequiredMessage).toBeInTheDocument();
	});

	test("Should show validation message when password is less than five characters", async () => {
		render(<SignIn />);
		const inputPassword = screen.getByLabelText(LABEL_PASSWORD);
		userEvent.type(inputPassword, "1234");

		const passwordMessage = await screen.findByText(
			/password is too short. should be 5 chars minimum/i
		);
		expect(passwordMessage).toBeInTheDocument();
	});

	test.each(TEST_CASES_EMAIL_VALIDATION)(
		"$messageTest",
		async ({ label, value }) => {
			render(<SignIn />);
			const inputEmail = screen.getByLabelText(label);
			userEvent.type(inputEmail, value);

			const messageValidation = /email must be a valid email/i;
			const emailMessage = await screen.findByText(messageValidation);
			expect(emailMessage).toBeInTheDocument();
		}
	);

	test.each(TEST_CASES_AUTHENTICATION_REQUEST)(
		"Should show message snackbar $messageTest",
		async ({ status, mockData }) => {
			mock.onPost("auth/login").reply(status, mockData);

			render(<SignIn />);
			const inputEmail = screen.getByLabelText(LABEL_EMAIL);
			userEvent.type(inputEmail, email);
			const inputPassword = screen.getByLabelText(LABEL_PASSWORD);
			userEvent.type(inputPassword, password);

			const buttonSubmit = screen.getByRole("button", {
				name: "Sign in",
			});

			await act(() => userEvent.click(buttonSubmit));

			await waitFor(() => {
				const snackbarMessage = screen.getByText(mockData.message);
				expect(snackbarMessage).toBeInTheDocument();
			});
		}
	);
});
