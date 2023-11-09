import {
	RESET_PASSWORD_NOT_SUCCESS_SUBTITLE,
	RESET_PASSWORD_SUCCESS_SUBTITLE,
	defineSubtitleMessage,
} from "modules/auth/ResetPassword/utils/define-subtitle-message";

describe("Function definesubTitleMessage()", () => {
	test(`Should return message ${RESET_PASSWORD_SUCCESS_SUBTITLE}, when 'isResetPasswordSuccess' is 'true'`, () => {
		const isResetPasswordSuccess = true;
		const result = defineSubtitleMessage(isResetPasswordSuccess);

		expect(result).toBe(RESET_PASSWORD_SUCCESS_SUBTITLE);
	});

	test(`Should return message ${RESET_PASSWORD_NOT_SUCCESS_SUBTITLE}, when 'isResetPasswordSuccess' is 'false'`, () => {
		const isResetPasswordSuccess = false;
		const result = defineSubtitleMessage(isResetPasswordSuccess);

		expect(result).toBe(RESET_PASSWORD_NOT_SUCCESS_SUBTITLE);
	});
});
