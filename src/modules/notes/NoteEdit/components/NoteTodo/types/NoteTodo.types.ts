import { ITodoData } from "modules/notes/NoteEdit/types";
import { Dispatch, SetStateAction } from "react";

export interface INoteTodo {
	todoData: ITodoData;
	setTodoData: Dispatch<SetStateAction<ITodoData | any>>;
	setTodoIdsToDelete: Dispatch<SetStateAction<Array<string>>>;
}
