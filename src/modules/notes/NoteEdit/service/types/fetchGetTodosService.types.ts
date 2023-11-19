export interface ITodo {
	todo_id: string;
	related_id?: string;
	title_todo: string;
	checked: boolean;
	order_index: number;
	created_at: string | Date;
}

export interface IFetchGetTodosResponse {
	count: number;
	todos: Array<ITodo> | any[];
}
export interface IFetchGetTodosProps {
	params: {
		related_id: string | null;
		board_id: string | null;
	};
}

export interface IFetchGetTodosService {
	({ params }: IFetchGetTodosProps): Promise<IFetchGetTodosResponse>;
}
