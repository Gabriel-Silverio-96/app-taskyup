import { FIRST_NAME_DEFAULT_VALIDATION, LAST_NAME_DEFAULT_VALIDATION, PASSWORD_DEFAULT_VALIDATION } from "shared/common/validation";
import * as Yup from "yup";

const { minLengthFirstName, messageFirstName } = FIRST_NAME_DEFAULT_VALIDATION;
const { minLengthLastName,  messageLastName} = LAST_NAME_DEFAULT_VALIDATION;
const { regexPassword, messagePassword } = PASSWORD_DEFAULT_VALIDATION;

const schema = Yup.object({
	first_name: Yup.string()
		.required(messageFirstName)
		.min(minLengthFirstName, messageFirstName),
	last_name: Yup.string()
		.required(messageLastName)
		.min(minLengthLastName, messageLastName),
	email: Yup.string().email().required(),
	password: Yup.string()
		.required()
		.matches(regexPassword, messagePassword)
		.min(8, "Password is too short. Should be 8 chars minimum")
});

export default schema;