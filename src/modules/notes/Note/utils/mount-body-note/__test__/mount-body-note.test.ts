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
		const color_note = faker.internet.color();
		const title_note = faker.lorem.word(5);
		const observation = faker.lorem.text();

		const body = mountBodyNote({ color_note, title_note, observation });
		const expected = { color_note, title_note, observation };

		expect(body).toEqual(expected);
	});
});
