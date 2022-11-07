import { faker } from "@faker-js/faker";

const FORGOT_PASSWORD_MOCK = {
	email: faker.internet.email()
};

const UNREGISTERED_USER_MOCK = {
	message: "Unregistered user, create an account",
	type_message: "warning",
};

const REGISTERED_USER_MOCK = {
	message: "Email sent, check your email",
	type_message: "success",
};

export { FORGOT_PASSWORD_MOCK, UNREGISTERED_USER_MOCK, REGISTERED_USER_MOCK };