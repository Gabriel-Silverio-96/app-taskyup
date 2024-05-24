import { faker } from "@faker-js/faker";
import { createURLQueryParams } from "../create-url-query-params";

describe("Function createURLQueryParams()", () => {
	test("Should return url with query params", () => {
		const baseURL = "/contact";
		const user_id = faker.datatype.uuid();
		const department = faker.commerce.department();
		const queryParams = { user_id, department };

		const url = createURLQueryParams(baseURL, queryParams);
		const expected = `/contact?user_id=${user_id}&department=${department}`;

		expect(url).toBe(expected);
	});
});
