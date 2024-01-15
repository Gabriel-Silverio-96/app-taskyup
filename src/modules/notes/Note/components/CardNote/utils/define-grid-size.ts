import { ViewMode } from "shared/common/types/AppTypes";
import { VIEW_MODE } from "shared/constants";

export const GRID_SIZE_LIST = { xl: 12, md: 12, xs: 12 };
export const GRID_SIZE_DEFAULT = { xl: 2, md: 3, xs: 12 };

export const defineGridSize = (viewMode: ViewMode) => {
	if (viewMode === VIEW_MODE.LIST) {
		return GRID_SIZE_LIST;
	}

	return GRID_SIZE_DEFAULT;
};
