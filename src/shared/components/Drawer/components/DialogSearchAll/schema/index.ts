import * as Yup from "yup";

const schema = Yup.object({
	query: Yup.string().required("Required field"),
});

export default schema;