import { ViewMode } from "shared/common/types/AppTypes";
import { VIEW_MODE } from "shared/constants";

export const LIST_GRID_SIZE = { xl: 12, md: 12, xs: 12 };
export const DEFAULT_GRID_SIZE = { xl: 2, md: 3, xs: 12 };

export const defineGridSize = (viewMode: ViewMode) => {
	if (viewMode === VIEW_MODE.LIST) {
		return LIST_GRID_SIZE;
	}

	return DEFAULT_GRID_SIZE;
};
