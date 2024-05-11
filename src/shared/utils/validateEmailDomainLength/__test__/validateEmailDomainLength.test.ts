import { faker } from "@faker-js/faker";
import { validateEmailDomainLength } from "shared/utils/validateEmailDomainLength";

describe("Function validateEmailDomainLength()", () => {
	test("Should return 'true' when the domain length is greater than one", () => {
		const value = faker.internet.email("carl", "grimes", "email.com");
		const result = validateEmailDomainLength(value);

		expect(result).toBe(true);
	});

	test("Should return 'false' when domain length is less than or equal to one", () => {
		const value = faker.internet.email("carl", "grimes", "email.c");
		const result = validateEmailDomainLength(value);

		expect(result).toBe(false);
	});

	test("Should return 'false' when the value is 'undefined'", () => {
		const value = undefined;
		const result = validateEmailDomainLength(value);

		expect(result).toBe(true);
	});
});
