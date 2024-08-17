import { screen } from "@testing-library/react";
import Drawer from "shared/components/Drawer";
import render from "shared/utils/test/render";

const renderComponent = () =>
	render(
		<Drawer>
			<div>Children component</div>
		</Drawer>
	);

describe("Component <Drawer />", () => {
	test("Should mount the component", () => {
		const { container } = renderComponent();
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = renderComponent();
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Should render children component", () => {
		renderComponent();
		const children = screen.getByText("Children component");

		expect(children).toBeInTheDocument();
	});
});
