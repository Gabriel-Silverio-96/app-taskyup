import { faker } from "@faker-js/faker";
import {
	defineSubtitleMessage,
	mountEmailSentSubtitleMessage,
	EMAIL_NOT_SENT_SUBTITLE,
} from "modules/auth/ForgotPassword/utils/define-subtitle-message";

const email = faker.internet.email();

describe("Function defineSubtitleMessage()", () => {
	test(`Should return message ${mountEmailSentSubtitleMessage(
		email
	)}, when 'isSending' is 'true'`, () => {
		const isSending = true;
		const result = defineSubtitleMessage(isSending, email);

		expect(result).toBe(mountEmailSentSubtitleMessage(email));
	});

	test(`Should return message ${EMAIL_NOT_SENT_SUBTITLE}, when 'isSending' is 'false'`, () => {
		const isSending = false;
		const result = defineSubtitleMessage(isSending, email);

		expect(result).toBe(EMAIL_NOT_SENT_SUBTITLE);
	});
});
