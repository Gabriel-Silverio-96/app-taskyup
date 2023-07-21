import api from "shared/services/api";
import { IFetchPutNoteService } from "../types";

const fetchGetOneNoteService = async (note_id: string | null) => {
	const { data } = await api.get(`notes/note_id=${note_id}`);
	return data;
};

const fetchPutNoteService = async (data: IFetchPutNoteService) => {
	const { payload, note_id, board_id } = data;
	const params = { params: { note_id, board_id } };

	await api.put("/notes/edit", payload, params);	
};


export { fetchGetOneNoteService, fetchPutNoteService };