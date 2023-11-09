export const RESET_PASSWORD_SUCCESS_SUBTITLE =
	"Your password has been reset successfully";
export const RESET_PASSWORD_NOT_SUCCESS_SUBTITLE = "Create new password bellow";

export const defineSubtitleMessage = (isResetPasswordSuccess: boolean) => {
	return isResetPasswordSuccess
		? RESET_PASSWORD_SUCCESS_SUBTITLE
		: RESET_PASSWORD_NOT_SUCCESS_SUBTITLE;
};
