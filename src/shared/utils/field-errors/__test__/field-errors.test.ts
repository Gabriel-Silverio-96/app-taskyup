import { faker } from "@faker-js/faker";
import { fieldErrors } from "shared/utils/field-errors";

describe("Function fieldErrors()", () => {
	it("Should return error false and helperText empty string when error is falsy", () => {
		const errors = undefined;
		const field = "name";

		const result = fieldErrors({ errors, field });
		const expected = { error: false, helperText: "" };

		expect(result).toEqual(expected);
	});

	it("Should return error true and helperText message when error exists for the field", () => {
		const message = faker.lorem.paragraph();
		const errors = { name: { message } };
		const field = "name";

		const result = fieldErrors({ errors, field });
		const expected = { error: true, helperText: message };

		expect(result).toEqual(expected);
	});

	it("Should return error false and empty helperText when no error exists for the field", () => {
		const errors = {};
		const field = "name";

		const result = fieldErrors({ errors, field });
		const expected = { error: false, helperText: "" };

		expect(result).toEqual(expected);
	});
});
