import * as Yup from "yup";

export const DialogEditBoardSchema = Yup.object({
	title: Yup.string()
		.required()
		.min(3, "Should be 3 chars minimum")
		.max(255, "Max of 255 characters"),
});
