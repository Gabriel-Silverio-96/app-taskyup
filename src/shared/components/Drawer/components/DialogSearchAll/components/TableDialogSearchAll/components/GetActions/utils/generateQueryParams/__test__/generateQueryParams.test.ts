import { faker } from "@faker-js/faker";
import { generateQueryParams } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/components/GetActions/utils/generateQueryParams";
import { IGenerateQueryParams } from "shared/components/Drawer/components/DialogSearchAll/components/TableDialogSearchAll/components/GetActions/utils/generateQueryParams/types";

describe("Function generateQueryParams()", () => {
	it("Should return the correct query params for type_board 'texts'", () => {
		const board_id = faker.datatype.uuid();
		const id = faker.datatype.uuid();

		const params: IGenerateQueryParams = {
			id,
			board_id,
			type_board: "texts",
		};
		const result = generateQueryParams(params);
		const expected = { board_id, text_id: id };

		expect(result).toEqual(expected);
	});

	it("Should return the correct query params for type_board 'notes'", () => {
		const board_id = faker.datatype.uuid();
		const id = faker.datatype.uuid();

		const params: IGenerateQueryParams = {
			id,
			board_id,
			type_board: "notes",
		};
		const result = generateQueryParams(params);
		const expected = { board_id, note_id: id };

		expect(result).toEqual(expected);
	});
});
