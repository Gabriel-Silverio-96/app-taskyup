import { IFetchGetOneNoteResponse } from "modules/notes/NoteEdit/services/types";
import api from "shared/services/api";

export const fetchGetOneNoteService = async (noteID: string | null) => {
	const { data } = await api.get<IFetchGetOneNoteResponse>(
		`notes/note_id=${noteID}`
	);
	return data;
};
