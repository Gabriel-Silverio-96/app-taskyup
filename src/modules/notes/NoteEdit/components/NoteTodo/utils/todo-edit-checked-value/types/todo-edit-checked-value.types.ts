import { ITodoData, ITodo } from "modules/notes/NoteEdit/types";

export interface ITodoEditCheckedValueProp {
	todoData: ITodoData;
	todo_id: string | null;
	checked: boolean | null;
}

export interface ITodoEditCheckedValue {
	(props: ITodoEditCheckedValueProp): Array<ITodo> | Array<any>;
}

export interface IEditCheckedValueProps
	extends Omit<ITodoEditCheckedValueProp, "todoData"> {
	todos: Array<ITodo>;
}

export interface IEditCheckedValue {
	(props: IEditCheckedValueProps): Array<ITodo> | Array<any>;
}
