import api from "shared/services/api";
import {
	IFetchGetTodosResponse,
	IFetchGetTodosService,
} from "modules/notes/NoteEdit/services/types";

export const fetchGetTodosService: IFetchGetTodosService = async ({
	params,
}) => {
	const { data } = await api.get<IFetchGetTodosResponse>("/todo/list", {
		params,
	});
	return data;
};
