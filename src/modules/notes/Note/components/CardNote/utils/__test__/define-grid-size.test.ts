import { VIEW_MODE } from "shared/constants";
import {
	DEFAULT_GRID_SIZE,
	LIST_GRID_SIZE,
	defineGridSize,
} from "modules/notes/Note/components/CardNote/utils/define-grid-size";

describe("Function defineGridSize()", () => {
	it("Should return LIST_GRID_SIZE for VIEW_MODE.LIST", () => {
		const result = defineGridSize(VIEW_MODE.LIST);
		expect(result).toEqual(LIST_GRID_SIZE);
	});

	it("Should return DEFAULT_GRID_SIZE for VIEW_MODE.GRID", () => {
		const result = defineGridSize(VIEW_MODE.GRID);
		expect(result).toEqual(DEFAULT_GRID_SIZE);
	});

	it("Should return DEFAULT_GRID_SIZE for 'unknown' view mode", () => {
		const result = defineGridSize([] as any);
		expect(result).toEqual(DEFAULT_GRID_SIZE);
	});
});
