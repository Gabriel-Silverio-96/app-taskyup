const FULL_NAME_DEFAULT_VALIDATION = {
	REGEX_FULLNAME:
		/^([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})+\s+([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,})+$/i,
	ERROR_MESSAGE: "Full name is a required field",
};

const PASSWORD_DEFAULT_VALIDATION = {
	REGEX_PASSWORD: /^(?=.*\d.*\d)(?=.*[a-zA-Z].*[a-zA-Z])(?=.*[\W]).{8,}$/,
	ERROR_MESSAGE:
		"Min 8 characters at least two letter two number \n and one character special",
};

export { FULL_NAME_DEFAULT_VALIDATION, PASSWORD_DEFAULT_VALIDATION };
