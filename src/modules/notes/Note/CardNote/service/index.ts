import api from "shared/services/api";
import { IFetchGetNotesResponse } from "../types/CardNote.component";

const fetchGetNotesService = async (board_id: string | undefined ) => {
	const { data } = await api.get<IFetchGetNotesResponse>(`/notes/list/board_id=${board_id}`);	
	return data;
};

export { fetchGetNotesService };