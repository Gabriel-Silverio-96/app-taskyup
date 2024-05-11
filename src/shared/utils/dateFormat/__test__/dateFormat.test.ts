import { dateFormat, errorMessage } from "shared/utils/dateFormat";

describe("Function dateFormat()", () => {
	test("should format the date string into a localized date string", () => {
		const date = "2024-04-20T00:00";
		const locale = "en-US";

		const result = dateFormat(date, locale);

		const expected = "4/20/2024";
		expect(result).toEqual(expected);
	});

	test("should use the default locale 'en-US' if no locale is provided", () => {
		const date = "2024-04-20T00:00";

		const result = dateFormat(date);

		const expected = "4/20/2024";
		expect(result).toEqual(expected);
	});

	test("should throw an error if the date  is 'falsy'", () => {
		const date = null;
		const act = () => dateFormat(date as any);

		expect(act).toThrowError(errorMessage);
	});
});
