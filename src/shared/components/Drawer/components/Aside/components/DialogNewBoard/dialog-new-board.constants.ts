import * as Yup from "yup";
import { BOARD_TYPE_ID } from "shared/constants";

const BOARD_TYPE_IDS = [
	BOARD_TYPE_ID.NOTES_BOARD_TYPE_ID,
	BOARD_TYPE_ID.TEXTS_BOARD_TYPE_ID,
	BOARD_TYPE_ID.KANBAN_BOARD_TYPE_ID,
];

export const DialogNewBoardSchema = Yup.object({
	title: Yup.string()
		.required()
		.min(3, "Should be 3 chars minimum")
		.max(255, "Max of 255 characters"),
	board_type_id: Yup.string()
		.required("Required field")
		.oneOf(BOARD_TYPE_IDS),
});
