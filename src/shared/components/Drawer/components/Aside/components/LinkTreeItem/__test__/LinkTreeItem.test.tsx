import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LinkTreeItem from "shared/components/Drawer/components/Aside/components/LinkTreeItem/LinkTreeItem";
import { MENU_MOCK } from "shared/components/Drawer/components/Aside/components/LinkTreeItem/__test__/mock";

describe("Component <LinkTreeItem />", () => {
	test("Renders the link tree items correctly", () => {
		const { notes } = MENU_MOCK;
		const [firstNote, secondNote] = notes;
		const SLUG = "notes";

		render(
			<Router>
				<LinkTreeItem data={MENU_MOCK} slug={SLUG} />
			</Router>
		);

		const firstLink = screen.getByRole("link", { name: firstNote.title });
		const secondLink = screen.getByRole("link", { name: secondNote.title });

		const firstLinkExpected = `/${SLUG}/${firstNote.board_id}`;
		expect(firstLink).toHaveAttribute("href", firstLinkExpected);

		const secondLinkExpected = `/${SLUG}/${secondNote.board_id}`;
		expect(secondLink).toHaveAttribute("href", secondLinkExpected);
	});

	test("Render nothing when data is 'falsy'", () => {
		render(
			<Router>
				<LinkTreeItem data={undefined} slug="texts" />
			</Router>
		);

		const links = screen.queryAllByRole("link");
		expect(links.length).toBe(0);
	});
});
