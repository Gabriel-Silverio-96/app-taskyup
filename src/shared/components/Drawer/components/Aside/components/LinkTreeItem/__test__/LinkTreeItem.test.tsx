import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LinkTreeItem from "shared/components/Drawer/components/Aside/components/LinkTreeItem/LinkTreeItem";
import { MENU_MOCK } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/__test__/mock";
import { ILinkTreeItem } from "../types";

const renderComponent = ({ data, propertyName }: ILinkTreeItem) =>
	render(
		<Router>
			<LinkTreeItem {...{ data, propertyName }} />
		</Router>
	);

describe("Component <LinkTreeItem />", () => {
	test("Renders the link tree items correctly", () => {
		const { notes } = MENU_MOCK;
		const [firstNote, secondNote] = notes;
		const SLUG = "notes";

		renderComponent({ data: MENU_MOCK, propertyName: "notes" });

		const [firstLink, secondLink] = screen.getAllByTestId("link-icon");

		const firstLinkExpected = `/${SLUG}/${firstNote.board_id}`;
		expect(firstLink).toHaveAttribute("href", firstLinkExpected);

		const secondLinkExpected = `/${SLUG}/${secondNote.board_id}`;
		expect(secondLink).toHaveAttribute("href", secondLinkExpected);
	});

	test("Not rendering the list when the data is 'falsy'", () => {
		renderComponent({ data: undefined, propertyName: "texts" });

		const links = screen.queryAllByRole("link");
		expect(links).toHaveLength(0);
	});
});
