import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostListTodoService, IFetchPutNoteService } from "../types";

const fetchPutNoteService = async (data: IFetchPutNoteService) => {
	const { payload, note_id, board_id } = data;
	const params = { params: { note_id, board_id } };

	await api.put("/notes/edit", payload, params);
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

export { fetchPostListTodoService, fetchPutNoteService };
