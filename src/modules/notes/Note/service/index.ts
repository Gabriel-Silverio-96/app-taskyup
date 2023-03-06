import api from "shared/services/api";
import { IFetchGetNotes } from "../types/Note.component";

const fetchGetNotes = async (board_id: string | undefined ) => {
	const response = await api.get<IFetchGetNotes>(`/notes/list/board_id=${board_id}`);    
	return response;
};

export default fetchGetNotes;