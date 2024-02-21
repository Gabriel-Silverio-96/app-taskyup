import { faker } from "@faker-js/faker";
import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export const MENU_FAVORITES_MOCK: IFetchGetMenuResponse = {
	notes: [],
	texts: [],
	favorites: [
		{
			favorite_id: faker.datatype.uuid(),
			related_id: faker.datatype.uuid(),
			board_id: faker.datatype.uuid(),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "notes",
			title: faker.lorem.word(5),
		},
		{
			favorite_id: faker.datatype.uuid(),
			related_id: faker.datatype.uuid(),
			board_id: faker.datatype.uuid(),
			board_type_id: faker.datatype.uuid(),
			board_type_title: "texts",
			title: faker.lorem.word(5),
		},
	],
};
