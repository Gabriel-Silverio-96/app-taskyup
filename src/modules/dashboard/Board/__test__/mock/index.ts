import { faker } from "@faker-js/faker";

const board_name = faker.name.firstName();
const board_name_edited = faker.name.firstName();
const board_id = faker.datatype.uuid();
const notes_id = "1f819d7d-11b5-4742-be86-2286ef50b5d5";

const BOARD_MOCK = {
	board_name,
	board_name_edited,
	board_type_id: {
		notes: notes_id,
	},
};

const LIST_BOARD_MOCK_SUCCESS_RESPONSE_MOCK = [
	{
		board_id,
		title: board_name,
		type_board: "notes",
		created_at: faker.date.between(
			"2020-01-01T00:00:00.000Z",
			"2030-01-01T00:00:00.000Z"
		),
		members_board: [faker.name.fullName()],
	},
];

const EDIT_BOARD_DATA_MOCK = {
	board_id,
	title: board_name_edited,
	created_at: faker.date.between(
		"2020-01-01T00:00:00.000Z",
		"2030-01-01T00:00:00.000Z"
	),
};

const EDIT_BOARD_SUCCESS_RESPONSE_MOCK = {
	message: "Board edited successfully",
	type_message: "success",
};

const CREATE_BOARD_SUCCESS_RESPONSE_MOCK = {
	message: "Board created successfully",
	type_message: "success",
};

export {
	BOARD_MOCK,
	LIST_BOARD_MOCK_SUCCESS_RESPONSE_MOCK,
	CREATE_BOARD_SUCCESS_RESPONSE_MOCK,
	EDIT_BOARD_DATA_MOCK,
	EDIT_BOARD_SUCCESS_RESPONSE_MOCK,
};