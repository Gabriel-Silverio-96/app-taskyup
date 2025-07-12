import { faker } from "@faker-js/faker";
import { IGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export const MENU_MOCK: IGetMenuResponse = {
	notes: [
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "notes",
			items: [
				{
					board_id: faker.datatype.uuid(),
					item_id: faker.datatype.uuid(),
					title: faker.lorem.word(5),
					emoji_image_url: faker.internet.url(),
				},
			],
		},
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "notes",
			items: [
				{
					board_id: faker.datatype.uuid(),
					item_id: faker.datatype.uuid(),
					title: faker.lorem.word(5),
					emoji_image_url: faker.internet.url(),
				},
			],
		},
	],
	texts: [
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "texts",
			items: [
				{
					board_id: faker.datatype.uuid(),
					item_id: faker.datatype.uuid(),
					title: faker.lorem.word(5),
					emoji_image_url: faker.internet.url(),
				},
			],
		},
		{
			board_id: faker.datatype.uuid(),
			title: faker.lorem.word(5),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "texts",
			items: [
				{
					board_id: faker.datatype.uuid(),
					item_id: faker.datatype.uuid(),
					title: faker.lorem.word(5),
					emoji_image_url: faker.internet.url(),
				},
			],
		},
	],
	favorites: [
		{
			favorite_id: faker.datatype.uuid(),
			related_id: faker.datatype.uuid(),
			board_id: faker.datatype.uuid(),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "notes",
			title: faker.lorem.word(5),
		},
	],
};
