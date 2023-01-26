import api from "shared/services/api";
import { IEditNoteData, IFetchSingleNote } from "../types/DialogEditNote.component";

const fetchSingleNote = async (noteID: string) => {
	const { data } = await api.get<IFetchSingleNote>(`notes/note_id=${noteID}`);
	return data;
};

const fetchEditNote = async (data: IEditNoteData) => {
	const { form, noteID, boardID } = data;
	const params = { params: { note_id: noteID, board_id: boardID } };

	await api.put("/notes/edit", form, params);	
};

export { fetchSingleNote, fetchEditNote };