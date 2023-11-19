import { ITodo } from "modules/notes/NoteEdit/services/types/fetchGetTodosService.types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchPostTodosProps {
	body: {
		related_id: string | null;
		board_id: string | null;
		todos: Array<ITodo> | any[];
		todo_ids_to_delete: Array<string>;
	};
}

export interface IFetchPostTodosService {
	({ body }: IFetchPostTodosProps): Promise<IFetchResponseDefault>;
}
