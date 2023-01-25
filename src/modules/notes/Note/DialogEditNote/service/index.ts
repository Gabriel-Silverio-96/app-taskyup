import api from "shared/services/api";
import { IFetchSingleNote } from "../types/DialogEditNote.component";

const fetchSingleNote = async (noteID: string) => {
	const { data } = await api.get<IFetchSingleNote>(`notes/note_id=${noteID}`);
	return data;
};

export { fetchSingleNote };