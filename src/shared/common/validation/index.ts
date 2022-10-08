const FULL_NAME_DEFAULT_VALIDATION = {
	regexFullName: /^([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,})+\s+([\wáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]{2,})+$/i,
	messageFullName: "Full name is a required field"
};

const PASSWORD_DEFAULT_VALIDATION = {
	regexPassword: /^(?=.*\d.*\d)(?=.*[a-zA-Z].*[a-zA-Z])(?=.*[\W]).{8,}$/,
	messagePassword: "Min 8 characters at least two letter two number \n and one character special"
};

export { FULL_NAME_DEFAULT_VALIDATION, PASSWORD_DEFAULT_VALIDATION };