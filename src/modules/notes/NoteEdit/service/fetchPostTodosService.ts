import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostTodosService } from "modules/notes/NoteEdit/service/types/fetchPostTodosService.types";

export const fetchPostTodosService: IFetchPostTodosService = async ({
	body,
}) => {
	const { data } = await api.post<IFetchResponseDefault>("/todo", body);
	return data;
};
