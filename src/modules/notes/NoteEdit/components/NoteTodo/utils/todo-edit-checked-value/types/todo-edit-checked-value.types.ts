import { ITodoData, ITodos } from "modules/notes/NoteEdit/types";

export interface ITodoEditCheckedValueProp {
	todoData: ITodoData;
	todo_id: string | null;
	checked: boolean | null;
}

export interface ITodoEditCheckedValue {
	(props: ITodoEditCheckedValueProp): Array<ITodos> | Array<any>;
}

export interface IEditCheckedValueProps
	extends Omit<ITodoEditCheckedValueProp, "todoData"> {
	todos: Array<ITodos>;
}

export interface IEditCheckedValue {
	(props: IEditCheckedValueProps): Array<ITodos> | Array<any>;
}
