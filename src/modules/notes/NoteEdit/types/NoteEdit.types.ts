import { Dispatch, SetStateAction } from "react";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface ITodos {
	todo_id: string;
	related_id?: string;
	title_todo: string;
	checked: boolean;
	order_index: number;
	created_at: string | Date;
}

export interface ITodoData {
	count: number;
	todos: Array<ITodos> | any[];
}

export interface INoteEditForm {
	color_note: string;
	title_note: string;
	observation: string;
}

export interface IFetchGetOneNoteResponse {
	color_note: string;
	title_note: string;
	observation: string;
	created_at: string;
}

export interface INoteEditView {
	register: UseFormRegister<INoteEditForm>;
	handleSubmit: UseFormHandleSubmit<INoteEditForm>;
	noteEditSubmit: (form: INoteEditForm) => void;
	errors: FieldErrors<INoteEditForm>;
	isFetching: boolean;
	isSaving: boolean;
	todoData: ITodoData;
	setTodoData: Dispatch<SetStateAction<ITodoData | any>>;
	setTodoIdsToDelete: Dispatch<SetStateAction<Array<string>>>;
}

export interface IFetchPutNoteService {
	payload: INoteEditForm;
	note_id: string | null;
	board_id: string | null;
}

export interface IFetchGetListTodoService {
	related_id: string | null;
	board_id: string | null;
}

export interface IFetchGetListTodoResponse {
	count: number;
	todos: Array<ITodos> | any[];
}

export interface IFetchPostListTodoService {
	note_id: string | null;
	board_id: string | null;
	payload: {
		todoData: ITodoData;
		todoIdsToDelete: Array<string>;
	};
}
