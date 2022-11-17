import { faker } from "@faker-js/faker";

const board_name = faker.name.jobTitle();
const notes_id = "1f819d7d-11b5-4742-be86-2286ef50b5d5";

const BOARD_MOCK = {
	board_name,
	board_type_id: {
		notes: notes_id
	}	
};

const LIST_BOARD_MOCK_SUCCESS_REPOSNSE_MOCK = [{
	board_id: faker.datatype.uuid(),
	title: board_name,	
	type_board: "notes",
	created_at: faker.date.between("2020-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z"),
	members_board: [faker.name.fullName()]
}];

const CREATE_BOARD_SUCCESS_REPOSNSE_MOCK = {
	message: "Board created successfully",
	type_message: "success"
};

export { BOARD_MOCK, LIST_BOARD_MOCK_SUCCESS_REPOSNSE_MOCK, CREATE_BOARD_SUCCESS_REPOSNSE_MOCK };