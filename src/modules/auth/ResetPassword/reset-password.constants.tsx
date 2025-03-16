import { PASSWORD_DEFAULT_VALIDATION } from "shared/common/validation";
import * as Yup from "yup";

export const RESET_PASSWORD_SCHEMA = Yup.object({
	password: Yup.string()
		.required()
		.matches(
			PASSWORD_DEFAULT_VALIDATION.REGEX_PASSWORD,
			PASSWORD_DEFAULT_VALIDATION.ERROR_MESSAGE
		)
		.min(8, "Password is too short. Should be 8 chars minimum"),
});
