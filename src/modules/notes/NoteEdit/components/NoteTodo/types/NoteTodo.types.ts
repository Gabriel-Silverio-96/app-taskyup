import {
	IFetchGetListTodoResponse,
	IFetchGetOneNoteResponse,
	ITodoData,
} from "modules/notes/NoteEdit/types";
import {
	ChangeEvent,
	Dispatch,
	FocusEvent,
	KeyboardEvent,
	SetStateAction,
} from "react";

export interface INoteTodo {
	todoData: ITodoData;
	setTodoData: Dispatch<SetStateAction<ITodoData | any>>;
	setTodoIdsToDelete: Dispatch<SetStateAction<Array<string>>>;
}

export interface IHandleChangeCheckbox {
	(event: ChangeEvent<HTMLInputElement>, todo_id: string): void;
}

export interface IHandleBlurTextField {
	(
		event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
		todo_id: string
	): void;
}

export interface IHandleKeyDown {
	(event: KeyboardEvent<HTMLInputElement>): void;
}

export interface IHandleClickDeleteTodo {
	(todo_id: string, related_id: string | undefined): void;
}

export interface INoteTodoView
	extends Omit<INoteTodo, "setTodoData" | "setTodoIdsToDelete"> {
	handleChangeCheckbox: IHandleChangeCheckbox;
	handleBlurTextField: IHandleBlurTextField;
	handleClickNewTodo: () => void;
	handleKeyDown: IHandleKeyDown;
	isAutoFocus: boolean;
	handleClickDeleteTodo: IHandleClickDeleteTodo;
}

export type TuplesNoteAndTodoResponse = [
	IFetchGetOneNoteResponse,
	IFetchGetListTodoResponse
];
