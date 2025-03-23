import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import type { IPutNoteService } from "modules/notes/NoteEdit/services/types";

export const putNoteService: IPutNoteService = async ({ params, body }) => {
	return await api.put<IFetchDefaultResponse>("/notes/edit", body, {
		params,
	});
};
