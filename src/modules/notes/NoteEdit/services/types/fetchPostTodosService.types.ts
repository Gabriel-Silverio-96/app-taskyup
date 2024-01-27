import { ITodo } from "modules/notes/NoteEdit/types";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IFetchPostTodosProps {
	body: {
		related_id: string | null;
		board_id: string | null;
		todos: Array<ITodo> | any[];
		todo_ids_to_delete: Array<string>;
	};
}

export interface IFetchPostTodosService {
	({ body }: IFetchPostTodosProps): Promise<IFetchDefaultResponse>;
}
