import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import render from "shared/util/test/render";
import SignUp from "../SignUp";

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
});