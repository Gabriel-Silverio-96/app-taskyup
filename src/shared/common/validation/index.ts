export const FIRST_NAME_DEFAULT_VALIDATION = {
	minLengthFirstName: 2,
	messageFirstName: "First name is a required field. Min 2 characters",
};

export const LAST_NAME_DEFAULT_VALIDATION = {
	minLengthLastName: 2,
	messageLastName: "Last name is a required field. Min 2 characters",
};

export const FULL_NAME_DEFAULT_VALIDATION = {
	regexFullName:
		/^([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})+\s+([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,})+$/i,
	messageFullName: "Full name is a required field",
};

export const PASSWORD_DEFAULT_VALIDATION = {
	regexPassword: /^(?=.*\d.*\d)(?=.*[a-zA-Z].*[a-zA-Z])(?=.*[\W]).{8,}$/,
	messagePassword:
		"Min 8 characters at least two letter two number \n and one character special",
};
