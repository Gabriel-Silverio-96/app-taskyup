import { TypeBoard } from "shared/common/types";
import { ITypeBoardMappings } from "./types";

export const DEFAULT_SUBDIRECTORY = "/note/edit";

const getSubDirectory = (type_board: TypeBoard): string => {
	const typeBoardMappings: ITypeBoardMappings = {
		texts: "/text/edit",
		notes: "/note/edit",
	};

	return typeBoardMappings[type_board] || DEFAULT_SUBDIRECTORY;
};

export { getSubDirectory };
