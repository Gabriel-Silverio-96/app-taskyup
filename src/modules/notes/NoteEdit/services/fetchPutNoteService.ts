import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPutNoteService } from "modules/notes/NoteEdit/services/types";

export const fetchPutNoteService: IFetchPutNoteService = async ({
	params,
	body,
}) => {
	return await api.put<IFetchResponseDefault>("/notes/edit", body, {
		params,
	});
};
