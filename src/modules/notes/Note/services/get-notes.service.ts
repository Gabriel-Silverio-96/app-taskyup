import api from "shared/services/api";
import type { IGetNotesResponse } from "modules/notes/Note/services/types";

export const getNotesService = async (boardID: string | undefined) => {
	const { data } = await api.get<IGetNotesResponse>(
		`/notes/list/board_id=${boardID}`
	);
	return data;
};
