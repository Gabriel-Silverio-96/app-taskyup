import { VIEW_MODE } from "shared/constants";
import {
	GRID_SIZE_DEFAULT,
	GRID_SIZE_LIST,
	defineGridSize,
} from "modules/notes/Note/components/CardNote/utils/define-grid-size";

describe("Function defineGridSize()", () => {
	it("Should return GRID_SIZE_LIST for VIEW_MODE.LIST", () => {
		const result = defineGridSize(VIEW_MODE.LIST);
		expect(result).toEqual(GRID_SIZE_LIST);
	});

	it("Should return GRID_SIZE_DEFAULT for VIEW_MODE.GRID", () => {
		const result = defineGridSize(VIEW_MODE.GRID);
		expect(result).toEqual(GRID_SIZE_DEFAULT);
	});

	it("Should return GRID_SIZE_DEFAULT for 'unknown' view mode", () => {
		const result = defineGridSize([] as any);
		expect(result).toEqual(GRID_SIZE_DEFAULT);
	});
});
