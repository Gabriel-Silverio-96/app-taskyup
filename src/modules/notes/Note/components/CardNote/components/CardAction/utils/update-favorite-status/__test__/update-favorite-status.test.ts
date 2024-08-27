import { updateFavoriteStatus } from "modules/notes/Note/components/CardNote/components/CardAction/utils/update-favorite-status";
import {
	EXPECTED_UPDATED_DATA,
	favorite_id,
	MOCK_DATA,
	note_id,
} from "modules/notes/Note/components/CardNote/components/CardAction/utils/update-favorite-status/__test__/mock";

describe("Function updateFavoriteStatus()", () => {
	test("Should set the favorite value to true and set the value of favorite_id", () => {
		const updatedFavoriteStatus = updateFavoriteStatus({
			data: MOCK_DATA,
			note_id,
			favorite_id,
		});

		expect(updatedFavoriteStatus).toEqual(EXPECTED_UPDATED_DATA);
	});

	test("Should return the same data when note_id is not equal", () => {
		const updatedFavoriteStatus = updateFavoriteStatus({
			data: MOCK_DATA,
			note_id: "ID_DOES_NOT_EXIST",
			favorite_id,
		});

		expect(updatedFavoriteStatus).toEqual(MOCK_DATA);
	});

	test("Should return the same data when the data is undefined", () => {
		const updatedFavoriteStatus = updateFavoriteStatus({
			data: undefined,
			note_id,
			favorite_id,
		});

		expect(updatedFavoriteStatus).toBeUndefined();
	});
});
