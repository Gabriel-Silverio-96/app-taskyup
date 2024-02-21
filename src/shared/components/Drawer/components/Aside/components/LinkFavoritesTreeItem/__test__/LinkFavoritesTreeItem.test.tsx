import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LinkFavoritesTreeItem from "shared/components/Drawer/components/Aside/components/LinkFavoritesTreeItem/LinkFavoritesTreeItem";
import { MENU_FAVORITES_MOCK } from "shared/components/Drawer/components/Aside/components/LinkFavoritesTreeItem/__test__/mock";

const renderComponent = (data: any) =>
	render(
		<Router>
			<LinkFavoritesTreeItem data={data} />
		</Router>
	);

describe("Component <LinkTreeItem />", () => {
	test("Renders the link favorites correctly", () => {
		const { favorites } = MENU_FAVORITES_MOCK;
		const [firstFavorite, secondFavorite] = favorites;

		renderComponent(MENU_FAVORITES_MOCK);

		const firstLink = screen.getByRole("link", {
			name: firstFavorite.title,
		});
		const secondLink = screen.getByRole("link", {
			name: secondFavorite.title,
		});

		const firstLinkExpected = `/note/edit?note_id=${firstFavorite.related_id}&board_id=${firstFavorite.board_id}`;
		expect(firstLink).toHaveAttribute("href", firstLinkExpected);

		const secondLinkExpected = `/text/edit?text_id=${secondFavorite.related_id}&board_id=${secondFavorite.board_id}`;
		expect(secondLink).toHaveAttribute("href", secondLinkExpected);
	});

	it("Render nothing when data is empty", () => {
		const { container } = renderComponent({
			notes: [],
			texts: [],
			favorites: [],
		});

		expect(container.firstChild).toBeNull();
	});

	test("Render nothing when data is 'falsy'", () => {
		renderComponent(undefined);

		const links = screen.queryAllByRole("link");
		expect(links.length).toBe(0);
	});
});
