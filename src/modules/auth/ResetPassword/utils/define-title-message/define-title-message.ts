export const RESET_PASSWORD_SUCCESS_TITLE = "Successfully";
export const RESET_PASSWORD_NOT_SUCCESS_TITLE = "Reset password";

export const defineTitleMessage = (isResetPasswordSuccess: boolean) => {
	return isResetPasswordSuccess
		? RESET_PASSWORD_SUCCESS_TITLE
		: RESET_PASSWORD_NOT_SUCCESS_TITLE;
};
