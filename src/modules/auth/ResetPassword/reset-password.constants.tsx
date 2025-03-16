import { PASSWORD_DEFAULT_VALIDATION } from "shared/common/validation";
import * as Yup from "yup";

const { regexPassword, messagePassword } = PASSWORD_DEFAULT_VALIDATION;

export const RESET_PASSWORD_SCHEMA = Yup.object({
	password: Yup.string()
		.required()
		.matches(regexPassword, messagePassword)
		.min(8, "Password is too short. Should be 8 chars minimum"),
});
