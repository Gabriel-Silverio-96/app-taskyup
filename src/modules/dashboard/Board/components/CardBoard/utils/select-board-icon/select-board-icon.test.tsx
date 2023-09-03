import { GoNote } from "react-icons/go";
import { MdOutlineNotes, MdOutlineSpaceDashboard } from "react-icons/md";
import { selectBoardIcon } from "./select-board-icon";
import { faker } from "@faker-js/faker";

describe("Function selectBoardIcon()", () => {
	test("Should return the correct icon for notes", () => {
		const iconColor = faker.color.human();
		const typeBoard = "notes";
		const expectedIcon = <GoNote size={15} color={iconColor} />;
  
		const result = selectBoardIcon(typeBoard, iconColor);  
		expect(result).toEqual(expectedIcon);
	});
  
	test("Should return the correct icon for texts", () => {
		const iconColor = faker.color.human();
		const typeBoard = "texts";
		const expectedIcon = <MdOutlineNotes color={iconColor} />;
  
		const result = selectBoardIcon(typeBoard, iconColor);  
		expect(result).toEqual(expectedIcon);
	});
  
	test("Should return the correct icon for kanban", () => {
		const iconColor = faker.color.human();
		const typeBoard = "kanban";
		const expectedIcon = <MdOutlineSpaceDashboard color={iconColor} />;
  
		const result = selectBoardIcon(typeBoard, iconColor);  
		expect(result).toEqual(expectedIcon);
	});
});
  
  
  
  
  
  
  
  