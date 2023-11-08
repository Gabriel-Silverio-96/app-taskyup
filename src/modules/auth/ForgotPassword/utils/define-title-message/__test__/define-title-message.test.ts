import {
	EMAIL_NOT_SENT_TITLE,
	EMAIL_SENT_TITLE,
	defineTitleMessage,
} from "modules/auth/ForgotPassword/utils/define-title-message";

describe("Function defineTitleMessage()", () => {
	test(`Should return message ${EMAIL_SENT_TITLE}, when 'isSending' is 'true'`, () => {
		const isSending = true;
		const result = defineTitleMessage(isSending);

		expect(result).toBe(EMAIL_SENT_TITLE);
	});

	test(`Should return message ${EMAIL_NOT_SENT_TITLE}, when 'isSending' is 'false'`, () => {
		const isSending = false;
		const result = defineTitleMessage(isSending);

		expect(result).toBe(EMAIL_NOT_SENT_TITLE);
	});
});
