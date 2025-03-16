import {
	FULL_NAME_DEFAULT_VALIDATION,
	PASSWORD_DEFAULT_VALIDATION,
} from "shared/common/validation";
import {
	DEFAULT_ERROR_MESSAGE_EMAIL,
	validateEmailDomainLength,
} from "shared/utils/validate-email-domain-length";
import * as Yup from "yup";

export const SignUpSchema = Yup.object({
	full_name: Yup.string()
		.matches(
			FULL_NAME_DEFAULT_VALIDATION.REGEX_FULLNAME,
			FULL_NAME_DEFAULT_VALIDATION.ERROR_MESSAGE
		)
		.required(),
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
		.matches(
			PASSWORD_DEFAULT_VALIDATION.REGEX_PASSWORD,
			PASSWORD_DEFAULT_VALIDATION.ERROR_MESSAGE
		)
		.min(8, "Password is too short. Should be 8 chars minimum"),
});
