import { defineValueCreatedAt } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/utils/define-value-created-at/define-value-created-at";

describe("Function defineValueCreatedAt()", () => {
	test("Should return an empty string when the value is falsy", () => {
		const value = undefined;
		const result = defineValueCreatedAt(value);

		expect(result).toBe("");
	});

	test("Should return date format when the value is string", () => {
		const value = "2024-01-13T14:49:37.000Z";
		const result = defineValueCreatedAt(value);

		expect(result).toBe("1/13/2024");
	});
});
