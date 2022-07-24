import * as Yup from "yup";

const schema = Yup.object({
	full_name: Yup.string()
		.matches(/^([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})+\s+([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,})+$/i, 
			"Full name is a required field")
		.required(),
	email: Yup.string().email().required(),
	password: Yup.string()
		.required()
		.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Min 8 characters, \n at least one letter and one number")
		.min(8, "Password is too short. Should be 8 chars minimum")
});

export default schema;