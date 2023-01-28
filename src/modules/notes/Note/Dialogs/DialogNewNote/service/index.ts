import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { ICreateNoteData } from "../types/DialogNewNotes.component";

const fetchCreateNote = async (data: ICreateNoteData) => {
	const { boardID, form } = data;
	await api.post<IFetchResponseDefault>(`notes/create/board_id=${boardID}`, form);
};

export default fetchCreateNote;