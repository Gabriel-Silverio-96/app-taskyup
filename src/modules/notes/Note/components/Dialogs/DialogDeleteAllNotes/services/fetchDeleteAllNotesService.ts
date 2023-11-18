import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const fetchDeleteAllNotesService = async (
	boardID: string | undefined
) => {
	return await api.delete<IFetchResponseDefault>(
		`notes/delete-all/board_id=${boardID}`
	);
};
