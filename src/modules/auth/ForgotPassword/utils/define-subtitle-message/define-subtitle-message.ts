export const mountEmailSentSubtitleMessage = (
	email: string
) => `An email is on its way to ${email}
with instructions for reset your password.`;

export const EMAIL_NOT_SENT_SUBTITLE = "Which email is registered on TaskYup";

export const defineSubtitleMessage = (isSending: boolean, email: string) => {
	return isSending
		? mountEmailSentSubtitleMessage(email)
		: EMAIL_NOT_SENT_SUBTITLE;
};
