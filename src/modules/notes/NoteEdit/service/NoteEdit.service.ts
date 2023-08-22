import api from "shared/services/api";
import {
	IFetchGetListTodoResponse,
	IFetchGetListTodoService,
	IFetchPostListTodoService,
	IFetchPutNoteService,
} from "../types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

const fetchGetOneNoteService = async (note_id: string | null) => {
	const { data } = await api.get(`notes/note_id=${note_id}`);
	return data;
};

const fetchPutNoteService = async (data: IFetchPutNoteService) => {
	const { payload, note_id, board_id } = data;
	const params = { params: { note_id, board_id } };

	await api.put("/notes/edit", payload, params);
};

const fetchGetListTodoService = async (payload: IFetchGetListTodoService) => {
	const { related_id, board_id } = payload;
	const params = { board_id, related_id };

	const { data } = await api.get<IFetchGetListTodoResponse>("/todo/list", {
		params,
	});
	return data;
};

const fetchPostListTodoService = async (data: IFetchPostListTodoService) => {
	const {
		note_id,
		board_id,
		payload: { todoData, todoIdsToDelete },
	} = data;

	const payload = {
		board_id,
		related_id: note_id,
		todo_ids_to_delete: todoIdsToDelete,
		todos: todoData.todos,
	};

	const response = await api.post<IFetchResponseDefault>("/todo", payload);
	return response.data;
};

export {
	fetchGetListTodoService,
	fetchGetOneNoteService,
	fetchPutNoteService,
	fetchPostListTodoService,
};
