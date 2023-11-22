import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import DoodleMessage from "../DoodleMessage";

const title = faker.random.word();
const message = faker.lorem.sentence(5);
const imageURL = faker.image.imageUrl();

describe("Component <DoodleMessage />", () => {
	test("Should mount the component", () => {
		const show = true;
		const { container } = render(
			<DoodleMessage {...{ title, message, show }} />
		);
		expect(container).toBeDefined();
	});

	test("Should unmount the component", () => {
		const show = true;
		const { container, unmount } = render(
			<DoodleMessage {...{ title, message, show }} />
		);
		unmount();
		expect(container).toBeEmptyDOMElement();
	});

	test("Should show prop image in the document", () => {
		const show = true;
		const image = <img src={imageURL} />;
		render(<DoodleMessage {...{ title, message, show, image }} />);

		const imgElement = screen.getByRole("img");
		expect(imgElement).toBeInTheDocument();
	});

	test(`Should show '${title}' and '${message}' when show equals true`, () => {
		const show = true;
		render(<DoodleMessage {...{ title, message, show }} />);

		const titleContent = screen.getByText(title);
		const messageContent = screen.getByText(message);

		expect(titleContent).toBeInTheDocument();
		expect(messageContent).toBeInTheDocument();
	});

	test(`Should not show '${title}' and '${message}' when show equals false`, () => {
		const show = false;
		render(<DoodleMessage {...{ title, message, show }} />);

		const titleContent = screen.queryByText(title);
		const messageContent = screen.queryByText(message);

		expect(titleContent).not.toBeInTheDocument();
		expect(messageContent).not.toBeInTheDocument();
	});
});
