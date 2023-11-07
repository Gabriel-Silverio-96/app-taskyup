export const EMAIL_SENT_TITLE = "Check your email";
export const EMAIL_NOT_SENT_TITLE = "Forgot password";

export const defineTitleMessage = (isSending: boolean) => {
	return isSending ? EMAIL_SENT_TITLE : EMAIL_NOT_SENT_TITLE;
};
