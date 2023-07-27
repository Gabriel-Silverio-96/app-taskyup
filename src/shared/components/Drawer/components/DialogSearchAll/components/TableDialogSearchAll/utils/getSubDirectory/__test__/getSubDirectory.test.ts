import { getSubDirectory } from "../getSubDirectory";

describe("Function getSubDirectory()", () => {
	it("should return the correct subdirectory for texts", () => {
		const type_board = "texts";
		const result = getSubDirectory(type_board);

		expect(result).toBe("/text/edit");
	});

	it("should return the correct subdirectory for notes", () => {
		const type_board = "notes";
		const result = getSubDirectory(type_board);

		expect(result).toBe("/note/edit");
	});
});