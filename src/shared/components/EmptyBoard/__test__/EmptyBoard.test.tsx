import { render, screen } from "@testing-library/react";
import EmptyBoard from "../EmptyBoard";
import { faker } from "@faker-js/faker";

const title = faker.random.word();
const message = faker.lorem.sentence(5);

describe("Component <EmptyBoard />", () => {
	test("Should mount the component", () => {
		const show = true;
		const { container } = render(
			<EmptyBoard {...{ title, message, show }} />
		);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const show = true;
		const { container, unmount } = render(
			<EmptyBoard {...{ title, message, show }} />
		);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test(`Should show '${title}' and '${message}' when show equals true`, () => {
		const show = true;
		render(<EmptyBoard {...{ title, message, show }} />);

		const titleContent = screen.getByText(title);
		const messageContent = screen.getByText(message);

		expect(titleContent).toBeInTheDocument();
		expect(messageContent).toBeInTheDocument();
	});

	test(`Should not show '${title}' and '${message}' when show equals false`, () => {
		const show = false;
		render(<EmptyBoard {...{ title, message, show }} />);

		const titleContent = screen.queryByText(title);
		const messageContent = screen.queryByText(message);

		expect(titleContent).not.toBeInTheDocument();
		expect(messageContent).not.toBeInTheDocument();
	});
});
