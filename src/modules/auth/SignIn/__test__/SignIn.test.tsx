import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EMAIL_MESSAGE_VALIDATION_MOCK, PASSWORD_MESSAGE_VALIDATION_MOCK } from "shared/util/test/message";
import render from "shared/util/test/render";
import SignIn from "../SignIn";

const { requiredEmail, validationEmail } = EMAIL_MESSAGE_VALIDATION_MOCK;
const { validationPassword } = PASSWORD_MESSAGE_VALIDATION_MOCK;

const EACH_EMAIL_CASES = [
	{ name: /email/i, value: "Email invalid", message: validationEmail },
	{ name: /email/i, value: "E", message: validationEmail },
	{ name: /email/i, value: "email@email.", message: validationEmail },
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

	test.each(EACH_EMAIL_CASES)(
		"Should show validation message when write wrong email",
		async ({name, value, message}) => {
			render(<SignIn />);
			const inputEmail = screen.getByRole("textbox", { name });
			userEvent.type(inputEmail, value);

			const emailMessage = await screen.findByText(message);
			expect(emailMessage).toBeInTheDocument();
		}
	);

	test("Should show validation message when password is less than five characters", async () => {
		render(<SignIn />);
		const inputPassword = screen.getByLabelText(/password/i);			
		userEvent.type(inputPassword, "1234");

		const passwordMessage = await screen.findByText(validationPassword);
		expect(passwordMessage).toBeInTheDocument();
	});
});
