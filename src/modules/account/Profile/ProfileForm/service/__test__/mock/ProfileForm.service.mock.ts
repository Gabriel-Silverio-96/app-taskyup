import { faker } from "@faker-js/faker";

export const FETCH_GET_PROFILE_RESPONSE_MOCK = {
	full_name: faker.name.fullName(),
	email: faker.internet.email(),
};