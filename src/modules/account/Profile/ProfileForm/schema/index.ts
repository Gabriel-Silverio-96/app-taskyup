import * as Yup from "yup";

const schema = Yup.object({
	full_name: Yup.string()
		.matches(/^([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})+\s+([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,})+$/i, 
			"Full name is a required field")
		.required(),
});

export default schema;