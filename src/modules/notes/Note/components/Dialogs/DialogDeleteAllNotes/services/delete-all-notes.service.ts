import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const deleteAllNotesService = async (boardID: string | undefined) => {
	return await api.delete<IFetchDefaultResponse>(
		`notes/delete-all/board_id=${boardID}`
	);
};
