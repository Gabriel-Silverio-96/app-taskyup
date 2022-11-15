import { faker } from "@faker-js/faker";

const BOARD_MOCK = {
	board_name: faker.name.jobTitle(),
	board_type_id: {
		notes: "1f819d7d-11b5-4742-be86-2286ef50b5d5"
	}
};

const CREATE_BOARD_SUCCESS_REPOSNSE_MOCK = {
	message: "Board created successfully",
	type_message: "success"
};

export { BOARD_MOCK, CREATE_BOARD_SUCCESS_REPOSNSE_MOCK };