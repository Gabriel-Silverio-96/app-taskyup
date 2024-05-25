import { faker } from "@faker-js/faker";
import { screen } from "@testing-library/react";
import Greeting from "shared/components/Greeting/Greeting";
import render from "shared/utils/test/render";

const title = faker.random.word();
const subtitle = faker.lorem.sentence(5);

describe("Component <Greeting />", () => {
	test("Should mount the component", () => {
		const { container } = render(<Greeting {...{ title, subtitle }} />);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const { container, unmount } = render(
			<Greeting {...{ title, subtitle }} />
		);

		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Should render the component with the correct props", () => {
		render(<Greeting {...{ title, subtitle }} />);

		expect(screen.getByText(title)).toBeInTheDocument();
		expect(screen.getByText(subtitle)).toBeInTheDocument();
	});
});
