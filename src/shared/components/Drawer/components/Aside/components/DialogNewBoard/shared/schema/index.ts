import * as Yup from "yup";
import {
	KANBAN_BOARD_TYPE_ID,
	NOTES_BOARD_TYPE_ID,
	TEXTS_BOARD_TYPE_ID,
} from "shared/components/Drawer/components/Aside/components/DialogNewBoard/constants";

const BOARD_TYPE_IDS = [
	NOTES_BOARD_TYPE_ID,
	TEXTS_BOARD_TYPE_ID,
	KANBAN_BOARD_TYPE_ID,
];

const schema = Yup.object({
	title: Yup.string().required().min(3, "Should be 3 chars minimum"),
	board_type_id: Yup.string()
		.required("Required field")
		.oneOf(BOARD_TYPE_IDS),
});

export default schema;