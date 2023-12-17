import { faker } from "@faker-js/faker";

export const MENU_MOCK = {
	notes: [
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: "notes",
			items: {
				board_id: faker.datatype.uuid(),
				item_id: faker.datatype.uuid(),
				title: faker.lorem.word(5),
			},
		},
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: "notes",
			items: {
				board_id: faker.datatype.uuid(),
				item_id: faker.datatype.uuid(),
				title: faker.lorem.word(5),
			},
		},
	],
	texts: [
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: "texts",
			items: {
				board_id: faker.datatype.uuid(),
				item_id: faker.datatype.uuid(),
				title: faker.lorem.word(5),
			},
		},
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: "texts",
			items: {
				board_id: faker.datatype.uuid(),
				item_id: faker.datatype.uuid(),
				title: faker.lorem.word(5),
			},
		},
	],
};
