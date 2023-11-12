import {
	FULL_NAME_DEFAULT_VALIDATION,
	PASSWORD_DEFAULT_VALIDATION,
} from "shared/common/validation";
import {
	DEFAULT_ERROR_MESSAGE_EMAIL,
	validateEmailDomainLength,
} from "shared/util/validateEmailDomainLength";
import * as Yup from "yup";

const { regexFullName, messageFullName } = FULL_NAME_DEFAULT_VALIDATION;
const { regexPassword, messagePassword } = PASSWORD_DEFAULT_VALIDATION;

export const SignUpSchema = Yup.object({
	full_name: Yup.string().matches(regexFullName, messageFullName).required(),
	email: Yup.string()
		.email(DEFAULT_ERROR_MESSAGE_EMAIL)
		.required()
		.test(
			"is-valid-email",
			DEFAULT_ERROR_MESSAGE_EMAIL,
			validateEmailDomainLength
		),
	password: Yup.string()
		.required()
		.matches(regexPassword, messagePassword)
		.min(8, "Password is too short. Should be 8 chars minimum"),
});
