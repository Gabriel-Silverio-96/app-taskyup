import { faker } from "@faker-js/faker";
import { defineDisabledNextButton } from "../define-disabled-next-button";

const PHOTHOS_MOCK = {
	id: faker.datatype.number(),
	photographer: faker.name.fullName(),
	photographer_url: faker.internet.url(),
	src: {
		tiny: faker.image.imageUrl(),
	},
	alt: faker.lorem.lines(),
};

describe("Funtion defineDisabledNextButton()", () => {
	it("Should return true when pagination is equal to or greater than total_pages", () => {
		const images = {
			total_results: 30,
			per_page: 10,
			photos: [],
		};
		const pagination = 3;

		const result = defineDisabledNextButton({ images, pagination });

		expect(result).toBe(true);
	});

	it("Should return true when the number of photos is less than 9", () => {
		const images = {
			total_results: 30,
			per_page: 10,
			photos: [],
		};
		const pagination = 1;

		const result = defineDisabledNextButton({ images, pagination });

		expect(result).toBe(true);
	});

	it("Should return false when pagination is less or equal than total_pages / per_page", () => {
		const photos = Array.from({ length: 10 }, () => PHOTHOS_MOCK); // Mock 10 photos

		const images = {
			total_results: 30,
			per_page: 10,
			photos,
		};
		const pagination = 1;

		const result = defineDisabledNextButton({ images, pagination });

		expect(result).toBe(false);
	});

	it("Should return false when pagination is less than total_pages and the number of photos is 9 or more", () => {
		const photos = Array.from({ length: 9 }, () => PHOTHOS_MOCK); // Mock 9 photos

		const images = {
			total_results: 30,
			per_page: 10,
			photos,
		};
		const pagination = 1;

		const result = defineDisabledNextButton({ images, pagination });

		expect(result).toBe(false);
	});
});
