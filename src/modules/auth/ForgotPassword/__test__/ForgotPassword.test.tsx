import render from "shared/util/test/render";
import ForgotPassword from "../ForgotPassword";

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
});