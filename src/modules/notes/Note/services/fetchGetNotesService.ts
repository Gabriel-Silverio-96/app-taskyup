import api from "shared/services/api";
import { IFetchGetNotesResponse } from "modules/notes/Note/components/CardNote/services/types";

export const fetchGetNotesService = async (boardID: string | undefined) => {
	const { data } = await api.get<IFetchGetNotesResponse>(
		`/notes/list/board_id=${boardID}`
	);
	return data;
};
