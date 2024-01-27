import { IFetchResponseDefault } from "shared/common/types";
import api from "shared/services/api";

export const fetchDeleteOneBoardService = async (
	boardID: string | undefined
) => {
	return await api.delete<IFetchResponseDefault>(
		`board/delete/board_id=${boardID}`
	);
};
