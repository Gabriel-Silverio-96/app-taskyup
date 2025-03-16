import * as Yup from "yup";

export const SIGN_IN_SCHEMA = Yup.object({
	email: Yup.string().email().required(),
	password: Yup.string()
		.required()
		.min(5, "Password is too short. Should be 5 chars minimum"),
});
