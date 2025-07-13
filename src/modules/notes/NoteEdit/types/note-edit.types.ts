import { Dispatch, SetStateAction } from "react";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
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
	title_note: string;
	observation: string;
	emoji_image_url: string;
}

export interface INoteEditView {
	register: UseFormRegister<INoteEditForm>;
	handleSubmit: UseFormHandleSubmit<INoteEditForm>;
	mutate: (form: INoteEditForm) => void;
	errors: FieldErrors<INoteEditForm>;
	isFetching: boolean;
	isSaving: boolean;
	todoData: ITodoData;
	setTodoData: Dispatch<SetStateAction<ITodoData | any>>;
	setTodoIdsToDelete: Dispatch<SetStateAction<Array<string>>>;
	setValue: UseFormSetValue<INoteEditForm>;
	watch: UseFormWatch<INoteEditForm>;
}

export type TypeTodoIdsToDelete = Array<string | any>;
