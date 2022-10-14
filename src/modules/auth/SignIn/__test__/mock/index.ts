import { faker } from "@faker-js/faker";

const SIGNIN_MOCK = {
	email: faker.internet.email(),
	password: faker.internet.password(),
	fullName: faker.name.fullName()
};

const USER_NOT_EXIST_MOCK = {
	message: "Unregistered user, create an account",
	type_message: "warning",
};

const INCORRECT_EMAIL_PASSWORD_MOCK = {
	message: "Incorrect email or password",
	type_message: "warning"	
};


export { 
	USER_NOT_EXIST_MOCK, SIGNIN_MOCK, 
	INCORRECT_EMAIL_PASSWORD_MOCK
};