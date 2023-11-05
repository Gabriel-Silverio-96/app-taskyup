import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { selectBoardIcon } from "./select-board-icon";
import { faker } from "@faker-js/faker";
import { ICON_SIZE } from "shared/constants";

describe("Function selectBoardIcon()", () => {
	test("Should return the correct icon for notes", () => {
		const iconColor = faker.color.human();
		const typeBoard = "notes";
		const expectedIcon = (
			<GoNote size={ICON_SIZE.MEDIUM} color={iconColor} />
		);

		const result = selectBoardIcon(typeBoard, iconColor);
		expect(result).toEqual(expectedIcon);
	});

	test("Should return the correct icon for texts", () => {
		const iconColor = faker.color.human();
		const typeBoard = "texts";
		const expectedIcon = (
			<MdOutlineNotes size={ICON_SIZE.MEDIUM} color={iconColor} />
		);

		const result = selectBoardIcon(typeBoard, iconColor);
		expect(result).toEqual(expectedIcon);
	});

	test("Should return the correct icon for kanban", () => {
		const iconColor = faker.color.human();
		const typeBoard = "kanban";
		const expectedIcon = (
			<MdOutlineSpaceDashboard
				size={ICON_SIZE.MEDIUM}
				color={iconColor}
			/>
		);

		const result = selectBoardIcon(typeBoard, iconColor);
		expect(result).toEqual(expectedIcon);
	});
});
