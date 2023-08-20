import { ITodoData, ITodos } from "modules/notes/NoteEdit/types";

export interface IEditCheckboxValueProp {
	todoData: ITodoData;
	todo_id: string | null;
	checked: boolean | null;
}

export interface IEditCheckboxValue {
	(props: IEditCheckboxValueProp): Array<ITodos> | Array<any>;
}

export interface IUpdatedTodosProps
	extends Omit<IEditCheckboxValueProp, "todoData"> {
	todos: Array<ITodos>;
}

export interface IUpdatedTodos {
	(props: IUpdatedTodosProps): Array<ITodos> | Array<any>;
}
