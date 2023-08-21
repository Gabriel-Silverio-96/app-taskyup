import { ITodoData, ITodos } from "modules/notes/NoteEdit/types";

export interface ITodoEditTitleValueProps {
	todoData: ITodoData;
	todo_id: string | null;
	value: string;
}

export interface ITodoEditTitleValue {
	(props: ITodoEditTitleValueProps): Array<ITodos> | Array<any>;
}

export interface IEditTitleTodoValueProps
	extends Omit<ITodoEditTitleValueProps, "todoData"> {
	todos: Array<ITodos>;
}

export interface IEditTitleTodoValue {
	(props: IEditTitleTodoValueProps): Array<ITodos> | Array<any>;
}
