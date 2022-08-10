import * as Yup from "yup";

const schema = Yup.object({
	title: Yup.string().required()
		.min(3, "Should be 3 chars minimum"),
});

export default schema;