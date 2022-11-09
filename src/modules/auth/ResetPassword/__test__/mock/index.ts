import { faker } from "@faker-js/faker";

const RESET_PASSWORD_MOCK = {
	token: faker.lorem.word(),
	password: faker.internet.password(20, true, /[a-z]/, "11546@")
};

const INVALID_TOKEN_MOCK = {
	// err: { name: faker.lorem.sentence(), message: faker.lorem.sentence() },
	message: "Invalid token",
	type_message: "error",
};

export { RESET_PASSWORD_MOCK, INVALID_TOKEN_MOCK };
