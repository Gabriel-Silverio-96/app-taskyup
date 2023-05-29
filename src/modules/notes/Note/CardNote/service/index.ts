import api from "shared/services/api";
import { IFetchGetNotes } from "../types/CardNote.component";

const fetchGetNotes = async (board_id: string | undefined ) => {
	const { data } = await api.get<IFetchGetNotes>(`/notes/list/board_id=${board_id}`);    
	return data;
};

export default fetchGetNotes;