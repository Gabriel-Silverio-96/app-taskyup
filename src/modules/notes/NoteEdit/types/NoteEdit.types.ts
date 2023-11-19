import { Dispatch, SetStateAction } from "react";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface ITodo {
	todo_id: string;
	related_id?: string;
	title_todo: string;
	checked: boolean;
	order_index: number;
	created_at: string | Date;
}

export interface ITodoData {
	count: number;
	todos: Array<ITodo> | any[];
}

export interface INoteEditForm {
	color_note: string;
	title_note: string;
	observation: string;
}

export interface INoteEditView {
	register: UseFormRegister<INoteEditForm>;
	handleSubmit: UseFormHandleSubmit<INoteEditForm>;
	handleSubmitNoteEdit: (form: INoteEditForm) => void;
	errors: FieldErrors<INoteEditForm>;
	isFetching: boolean;
	isSaving: boolean;
	todoData: ITodoData;
	setTodoData: Dispatch<SetStateAction<ITodoData | any>>;
	setTodoIdsToDelete: Dispatch<SetStateAction<Array<string>>>;
}

export type TypeTodoIdsToDelete = Array<string | any>;
