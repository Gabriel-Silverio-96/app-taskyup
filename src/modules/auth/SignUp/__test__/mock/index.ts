import { faker } from "@faker-js/faker";

const SIGNUP_MOCK = {
	fullName: faker.name.fullName(),
	email: faker.internet.email(),
	password: faker.internet.password(20, true, /[a-z]/, "11546@")
};

const EMAIL_REGISTERED_RESPONSE_MOCK = {
	message: "This email is already registered",
	type_message: "warning",
};

const CREATE_ACCOUNT_SUCCESS_RESPONSE_MOCK = {
	message: "Account created successfully",
	type_message: "success",
};


export { SIGNUP_MOCK, EMAIL_REGISTERED_RESPONSE_MOCK, CREATE_ACCOUNT_SUCCESS_RESPONSE_MOCK };