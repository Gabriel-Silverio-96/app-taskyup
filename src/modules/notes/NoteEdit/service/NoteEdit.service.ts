import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostListTodoService } from "../types";

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

export { fetchPostListTodoService };
