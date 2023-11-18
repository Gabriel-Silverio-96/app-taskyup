import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const fetchDeleteOneNoteService = async (noteID: string) => {
	return await api.delete<IFetchResponseDefault>(
		`notes/delete-this/note_id=${noteID}`
	);
};
