import { faker } from "@faker-js/faker";

const SIGNIN_MOCK = {
	email: faker.internet.email(),
	password: faker.internet.password()
};

const USER_NOT_EXIST_MOCK = {
	type_message: "warning",
	message: "Unregistered user, create an account"
};

const INCORRECT_EMAIL_PASSWORD_MOCK = {
	message: "Incorrect email or password",
	type_message: "warning"	
};


export { 
	USER_NOT_EXIST_MOCK, SIGNIN_MOCK, 
	INCORRECT_EMAIL_PASSWORD_MOCK
};