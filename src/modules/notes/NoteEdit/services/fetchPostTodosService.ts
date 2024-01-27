import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IFetchPostTodosService } from "modules/notes/NoteEdit/services/types";

export const fetchPostTodosService: IFetchPostTodosService = async ({
	body,
}) => {
	const { data } = await api.post<IFetchDefaultResponse>("/todo", body);
	return data;
};
