import { faker } from "@faker-js/faker";
import {
	DEFAULT_BODY_NOTE,
	mountBodyNote,
} from "modules/notes/Note/utils/mount-body-note";

describe("Function mountBodyNote()", () => {
	test("Should return body to create note", () => {
		const body = mountBodyNote();

		expect(body).toEqual(DEFAULT_BODY_NOTE);
	});

	test("Should change the object's default values", () => {
		const emoji_image_url = faker.internet.url();
		const title_note = faker.lorem.word(5);
		const observation = faker.lorem.text();

		const body = mountBodyNote({
			emoji_image_url,
			title_note,
			observation,
		});
		const expected = { emoji_image_url, title_note, observation };

		expect(body).toEqual(expected);
	});
});
