import { ITodo } from "modules/notes/NoteEdit/types";

export interface IGetTodosResponse {
	count: number;
	todos: Array<ITodo> | any[];
}
export interface IFetchGetTodosProps {
	params: {
		related_id: string | null;
		board_id: string | null;
	};
}

export interface IGetTodosService {
	({ params }: IFetchGetTodosProps): Promise<IGetTodosResponse>;
}
