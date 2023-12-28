import { INoteEditForm } from "modules/notes/NoteEdit/types";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface IFormNoteEdit {
	register: UseFormRegister<INoteEditForm>;
	handleSubmit: UseFormHandleSubmit<INoteEditForm>;
	mutate: (form: INoteEditForm) => void;
	errors: FieldErrors<INoteEditForm>;
}

export interface IFormNoteEditView extends IFormNoteEdit {
	linkPreviousPage: string;
}
