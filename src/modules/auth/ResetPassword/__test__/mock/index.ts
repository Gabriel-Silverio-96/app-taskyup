import { faker } from "@faker-js/faker";

const RESET_PASSWORD_MOCK = {
	token: faker.lorem.word(),
	password: faker.internet.password(20, true, /[a-z]/, "11546@"),
};

const RESET_PASSWORD_SUCCESS_RESPONSE_MOCK = {
	message: "Password updated",
	type_message: "success",
};

export { RESET_PASSWORD_MOCK, RESET_PASSWORD_SUCCESS_RESPONSE_MOCK };
