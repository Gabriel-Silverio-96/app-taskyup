import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LinkTreeItem from "../LinkTreeItem";
import { MENU_MOCK } from "./mock";

describe("Component <LinkTreeItem />", () => {
	test("Renders the link tree items correctly", () => {
		const { notes } = MENU_MOCK;
		const [ firstNote, secondNote ] = notes;
		const SLUG = "notes";

		render(<Router><LinkTreeItem menu={MENU_MOCK} slug={SLUG} /></Router>);
        
		const firstLink = screen.getByRole("link", { name: firstNote.title });
		const secondLink = screen.getByRole("link", { name: secondNote.title });
        
		const firstLinkExpected = `/${SLUG}/${firstNote.board_id}`;
		expect(firstLink).toHaveAttribute("href", firstLinkExpected);
        
		const secondLinkExpected = `/${SLUG}/${secondNote.board_id}`;
		expect(secondLink).toHaveAttribute("href", secondLinkExpected);
	});

	test("Render nothing when menu is 'undefined'", () => {
		render(<Router><LinkTreeItem menu={undefined} slug="texts" /></Router>);
		
		const links = screen.queryAllByRole("link");
		expect(links.length).toBe(0);
	});
});