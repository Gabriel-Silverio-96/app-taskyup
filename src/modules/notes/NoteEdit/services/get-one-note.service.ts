import type { IGetOneNoteResponse } from "modules/notes/NoteEdit/services/types";
import api from "shared/services/api";

export const getOneNoteService = async (noteID: string | null) => {
	const { data } = await api.get<IGetOneNoteResponse>(
		`notes/note_id=${noteID}`
	);
	return data;
};
