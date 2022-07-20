import * as Yup from "yup";

const schema = Yup.object({
	email: Yup.string().email().required(),
	password: Yup.string()
		.required()
		.min(5, "Password is too short. Should be 8 chars minimum")
});

export default schema;