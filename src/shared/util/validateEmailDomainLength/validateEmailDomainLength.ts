export const DEFAULT_ERROR_MESSAGE_EMAIL =
	"Email must be a valid email. Example: email@email.io";

const isValidEmailDomain = (value: string | undefined) => {
	if (value) return /\./.test(value) && /@/.test(value);
};

/**
 * Validates the length of the domain in an email address.
 *
 * @param {string | undefined} value - The email address to validate.
 * @returns {boolean} `true` if the domain length is valid; otherwise, `false`.
 */
export const validateEmailDomainLength = (value: string | undefined) => {
	if (isValidEmailDomain(value)) {
		const emailDomain = value?.split("@")[1];
		const domain = emailDomain?.split(".")[1];

		return domain ? domain.length > 1 : false;
	}

	return true;
};
