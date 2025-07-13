import { faker } from "@faker-js/faker";
import { IGetNotesResponse } from "modules/notes/Note/services/types";

const note_id = faker.datatype.uuid();
const favorite_id = faker.datatype.uuid();
const created_at = faker.datatype.datetime();
const title_note = faker.lorem.lines(1);
const title = faker.lorem.lines(1);
const color_note = faker.internet.color();
const emoji_image_url = faker.internet.url();

const MOCK_DATA: IGetNotesResponse = {
	title,
	count: 1,
	list_notes: [
		{
			note_id,
			color_note,
			title_note,
			observation: "",
			created_at,
			favorite: false,
			favorite_id: null,
			emoji_image_url,
			todos: {
				total: 0,
				total_checked: 0,
			},
		},
		{
			note_id: "1",
			color_note,
			title_note,
			observation: "",
			created_at,
			favorite: false,
			favorite_id: null,
			emoji_image_url,
			todos: {
				total: 0,
				total_checked: 0,
			},
		},
	],
};

const EXPECTED_UPDATED_DATA = {
	title,
	count: 1,
	list_notes: [
		{
			note_id,
			color_note,
			title_note,
			observation: "",
			created_at,
			favorite: true,
			favorite_id,
			emoji_image_url,
			todos: {
				total: 0,
				total_checked: 0,
			},
		},
		{
			note_id: "1",
			color_note,
			title_note,
			observation: "",
			created_at,
			favorite: false,
			favorite_id: null,
			emoji_image_url,
			todos: {
				total: 0,
				total_checked: 0,
			},
		},
	],
};

export { MOCK_DATA, EXPECTED_UPDATED_DATA, note_id, favorite_id };
