import * as Yup from "yup";

const schema = Yup.object({
	title_note: Yup.string()
		.required("Title note is a required field")
		.min(3, "Should be 3 chars minimum")
		.max(100, "Max of 100 characters"),
	observation: Yup.string().max(65000, "Max of 65000 characters"),
});

export default schema;
