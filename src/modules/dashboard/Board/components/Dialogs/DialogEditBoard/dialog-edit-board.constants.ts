import * as Yup from "yup";

export const ERROR_MESSAGE_UPDATE_BOARD =
	"There was an error and it was not possible to update the board";

export const DIALOG_EDIT_BOARD_QUERY_KEY = {
	FETCH_GET_ONE_BOARD: "FETCH_GET_ONE_BOARD",
};

export const DIALOG_EDIT_BOARD_SCHEMA = Yup.object({
	title: Yup.string()
		.required()
		.min(3, "Should be 3 chars minimum")
		.max(255, "Max of 255 characters"),
});
