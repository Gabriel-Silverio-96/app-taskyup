import {
	RESET_PASSWORD_NOT_SUCCESS_TITLE,
	RESET_PASSWORD_SUCCESS_TITLE,
	defineTitleMessage,
} from "modules/auth/ResetPassword/utils/define-title-message";

describe("Function defineTitleMessage()", () => {
	test(`Should return message ${RESET_PASSWORD_SUCCESS_TITLE}, when 'isResetPasswordSuccess' is 'true'`, () => {
		const isResetPasswordSuccess = true;
		const result = defineTitleMessage(isResetPasswordSuccess);

		expect(result).toBe(RESET_PASSWORD_SUCCESS_TITLE);
	});

	test(`Should return message ${RESET_PASSWORD_NOT_SUCCESS_TITLE}, when 'isResetPasswordSuccess' is 'false'`, () => {
		const isResetPasswordSuccess = false;
		const result = defineTitleMessage(isResetPasswordSuccess);

		expect(result).toBe(RESET_PASSWORD_NOT_SUCCESS_TITLE);
	});
});
