import { ITodoData, ITodos } from "modules/notes/NoteEdit/types";

export interface ITodoEditCheckboxValueProp {
	todoData: ITodoData;
	todo_id: string | null;
	checked: boolean | null;
}

export interface ITodoEditCheckboxValue {
	(props: ITodoEditCheckboxValueProp): Array<ITodos> | Array<any>;
}

export interface IUpdatedTodosProps
	extends Omit<ITodoEditCheckboxValueProp, "todoData"> {
	todos: Array<ITodos>;
}

export interface IUpdatedTodos {
	(props: IUpdatedTodosProps): Array<ITodos> | Array<any>;
}
