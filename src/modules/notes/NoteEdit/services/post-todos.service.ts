import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import type { IPostTodosService } from "modules/notes/NoteEdit/services/types";

export const postTodosService: IPostTodosService = async ({ body }) => {
	const { data } = await api.post<IFetchDefaultResponse>("/todo", body);
	return data;
};
