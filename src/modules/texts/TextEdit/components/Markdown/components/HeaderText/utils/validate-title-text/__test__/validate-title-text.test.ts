import { faker } from "@faker-js/faker";
import {
	ERROR_MESSAGE_TITLE_TEXT,
	validateTitleText,
} from "../validate-title-text";

describe("Function validateTitleText()", () => {
	test(`Should return isError 'true' and message ${ERROR_MESSAGE_TITLE_TEXT}, when 'titleText' length is less than 3`, () => {
		const titleText = faker.lorem.word(2);

		const result = validateTitleText(titleText);
		const expected = { isError: true, message: ERROR_MESSAGE_TITLE_TEXT };

		expect(result).toEqual(expected);
	});

	test("Should return isError 'false' and message an empty string, when 'titleText' length is greater than 3", () => {
		const titleText = faker.lorem.word(5);

		const result = validateTitleText(titleText);
		const expected = { isError: false, message: "" };

		expect(result).toEqual(expected);
	});
});
