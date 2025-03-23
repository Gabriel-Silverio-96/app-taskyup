import api from "shared/services/api";
import type {
	IGetTodosResponse,
	IGetTodosService,
} from "modules/notes/NoteEdit/services/types";

export const getTodosService: IGetTodosService = async ({ params }) => {
	const { data } = await api.get<IGetTodosResponse>("/todo/list", {
		params,
	});
	return data;
};
