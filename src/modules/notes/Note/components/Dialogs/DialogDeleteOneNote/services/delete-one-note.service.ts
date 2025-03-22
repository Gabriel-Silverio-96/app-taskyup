import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const deleteOneNoteService = async (noteID: string) => {
	return await api.delete<IFetchDefaultResponse>(
		`notes/delete-this/note_id=${noteID}`
	);
};
