import { faker } from "@faker-js/faker";
import { IFetchGetNotesResponse } from "modules/notes/Note/services/types";

const note_id = faker.datatype.uuid();
const favorite_id = faker.datatype.uuid();
const created_at = faker.datatype.datetime();
const title_note = faker.lorem.lines(1);
const title = faker.lorem.lines(1);
const color_note = faker.internet.color();

const MOCK_DATA: IFetchGetNotesResponse = {
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
			todos: {
				total: 0,
				total_checked: 0,
			},
		},
	],
};

export { MOCK_DATA, EXPECTED_UPDATED_DATA, note_id, favorite_id };