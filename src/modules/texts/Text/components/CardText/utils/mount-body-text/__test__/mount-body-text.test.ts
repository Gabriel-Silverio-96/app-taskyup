import { mountBodyText } from "../mount-body-text";

describe("Function mountBodyText()", () => {
	test("Should return body to create text", () => {
		const body = mountBodyText();        
    	const expected = { title_text: "Title text", text: "" };

		expect(body).toEqual(expected);
	});
});