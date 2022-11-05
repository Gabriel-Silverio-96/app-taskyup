import { faker } from "@faker-js/faker";

const SIGNIN_MOCK = {
	email: faker.internet.email(),
	password: faker.internet.password(),
};

const USER_NOT_EXIST_RESPONSE_MOCK = {
	message: "Unregistered user, create an account when the user does not take into account",
	type_message: "warning",
};

const INCORRECT_EMAIL_PASSWORD_RESPONSE_MOCK = {
	message: "Incorrect email or password when the user wrote their email or password incorrect",
	type_message: "warning"	
};

const AUTHENTICATION_SUCCESS_RESPONSE_MOCK = {
	message: "Successful authentication",
	token: faker.datatype.uuid(),
	type_message: "success",
	user_data: {
		full_name: faker.name.fullName()
	}
};

export { 
	SIGNIN_MOCK, 
	USER_NOT_EXIST_RESPONSE_MOCK, 
	INCORRECT_EMAIL_PASSWORD_RESPONSE_MOCK,
	AUTHENTICATION_SUCCESS_RESPONSE_MOCK
};