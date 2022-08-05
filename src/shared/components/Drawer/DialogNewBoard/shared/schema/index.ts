import * as Yup from "yup";

const boardTypeID = ["1f819d7d-11b5-4742-be86-2286ef50b5d5", "7b784aee-0133-4d6a-b14b-8dbbe19e9428", "1cf4ff82-59bd-4733-890c-c9226ea0df2f"];

const schema = Yup.object({
	title: Yup.string().required()
		.min(3, "Should be 3 chars minimum"),
	board_type_id: Yup.string().required("Required field").oneOf(boardTypeID)
});

export default schema;