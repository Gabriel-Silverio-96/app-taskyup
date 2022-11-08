import render from "shared/util/test/render";
import ResetPassword from "../ResetPassword";

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
});