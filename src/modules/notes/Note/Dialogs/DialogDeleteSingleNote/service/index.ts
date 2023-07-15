import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchDeleteOneNoteService = async (noteID: string) => {
	await api.delete<IFetchResponseDefault>(`notes/delete-this/note_id=${noteID}`);        
};

export default fetchDeleteOneNoteService;