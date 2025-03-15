import * as Yup from "yup";

export const INITAL_STATE_SEND_EMAIL = { email: "", isSending: false };

export const FORGOT_PASSWORD_SCHEMA = Yup.object({
	email: Yup.string().email().required(),
});
