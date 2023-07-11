import api from "shared/services/api";
import { IFetchGetNotesResponse } from "../types";

const fetchGetNotesService = async (board_id: string | undefined ) => {
	const { data } = await api.get<IFetchGetNotesResponse>(`/notes/list/board_id=${board_id}`);	
	return data;
};

export { fetchGetNotesService };