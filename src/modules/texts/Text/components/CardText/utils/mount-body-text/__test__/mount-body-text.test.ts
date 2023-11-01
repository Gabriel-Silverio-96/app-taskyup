import { faker } from "@faker-js/faker";
import {
	DEFAULT_BODY_TEXT,
	mountBodyText,
} from "modules/texts/Text/components/CardText/utils/mount-body-text";

describe("Function mountBodyText()", () => {
	test("Should return body to create text", () => {
		const body = mountBodyText();

		expect(body).toEqual(DEFAULT_BODY_TEXT);
	});

	test("Should change the object's default values", () => {
		const title_text = faker.lorem.word(5);
		const text = faker.lorem.text();

		const body = mountBodyText({ title_text, text });
		const expected = { title_text, text };

		expect(body).toEqual(expected);
	});
});
