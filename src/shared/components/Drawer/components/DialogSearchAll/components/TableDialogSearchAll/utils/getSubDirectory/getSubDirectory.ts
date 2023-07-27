import { TYPE_BOARD } from "shared/common/types/AppTypes";
import { ITypeBoardMappings } from "./types";

export const DEFAULT_SUBDIRECTORY = "/note/edit";

const getSubDirectory = (type_board: TYPE_BOARD): string => {
	const typeBoardMappings: ITypeBoardMappings = {
		texts: "/text/edit",
		notes: "/note/edit",
	};
      
	return typeBoardMappings[type_board] || DEFAULT_SUBDIRECTORY;
};

export { getSubDirectory };