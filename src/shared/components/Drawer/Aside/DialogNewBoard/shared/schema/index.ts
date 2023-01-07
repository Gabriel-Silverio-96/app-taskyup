import * as Yup from "yup";

const boardTypeID = ["1f819d7d-11b5-4742-be86-2286ef50b5d5", "43fa2ae7-48eb-4e1c-a746-617a643fee45", "1cf4ff82-59bd-4733-890c-c9226ea0df2f"];

const schema = Yup.object({
	title: Yup.string().required()
		.min(3, "Should be 3 chars minimum"),
	board_type_id: Yup.string().required("Required field").oneOf(boardTypeID)
});

export default schema;