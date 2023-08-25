import { ITodoData, ITodo } from "modules/notes/NoteEdit/types";

export interface ITodoEditTitleValueProps {
	todoData: ITodoData;
	todo_id: string | null;
	value: string;
}

export interface ITodoEditTitleValue {
	(props: ITodoEditTitleValueProps): Array<ITodo> | Array<any>;
}

export interface IEditTitleTodoValueProps
	extends Omit<ITodoEditTitleValueProps, "todoData"> {
	todos: Array<ITodo>;
}

export interface IEditTitleTodoValue {
	(props: IEditTitleTodoValueProps): Array<ITodo> | Array<any>;
}
