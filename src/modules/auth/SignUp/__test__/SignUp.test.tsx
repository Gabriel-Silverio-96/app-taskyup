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
    
});