const EMAIL_MESSAGE_VALIDATION_MOCK = {
	requiredEmail: /email is a required field/i,
	validationEmail: /email must be a valid email/i
};

const PASSWORD_MESSAGE_VALIDATION_MOCK = {	
	validationPassword: /password is too short. should be 5 chars minimum/i
};

export { EMAIL_MESSAGE_VALIDATION_MOCK, PASSWORD_MESSAGE_VALIDATION_MOCK };