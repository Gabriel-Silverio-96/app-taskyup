import api from "shared/services/api";
import { IListNotes } from "../types/CardNote.component";

const fetchGetNotes = async (board_id: string | null ) => {	
	
	const { data } = await api.get<IListNotes>(`/notes/list/board_id=${board_id}`);    
	return data;
};

export default fetchGetNotes;