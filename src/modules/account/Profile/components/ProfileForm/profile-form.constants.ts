import * as Yup from "yup";

export const PROFILE_QUERY_KEY = {
	FETCH_GET_PROFILE: "FETCH_GET_PROFILE",
};

export const PROFILE_FORM_SCHEMA = Yup.object({
	full_name: Yup.string()
		.matches(
			/^([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})+\s+([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,})+$/i,
			"Full name is a required field"
		)
		.required(),
});
