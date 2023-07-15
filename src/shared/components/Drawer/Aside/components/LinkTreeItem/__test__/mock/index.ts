import { faker } from "@faker-js/faker";

export const MENU_MOCK = {
	notes: [
		{ board_id: faker.datatype.uuid(), title: faker.lorem.word(5), board_type_id: "notes" },
		{ board_id: faker.datatype.uuid(), title: faker.lorem.word(5),  board_type_id: "notes"},
	],
	texts: [
		{ board_id: faker.datatype.uuid(), title: faker.lorem.word(5), board_type_id: "texts" },
		{ board_id: faker.datatype.uuid(), title: faker.lorem.word(5), board_type_id: "texts" },
	],
};