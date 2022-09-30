import * as Yup from "yup";

const schema = Yup.object({
	password: Yup.string()
		.required()
		.matches(/^(?=.*\d.*\d)(?=.*[a-zA-Z].*[a-zA-Z])(?=.*[\W]).{8,}$/, "Min 8 characters \n at least two letter, two number and one character special")
		.min(8, "Password is too short. Should be 8 chars minimum")
});

export default schema;