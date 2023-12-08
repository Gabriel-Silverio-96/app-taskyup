import { INoteEditForm } from "modules/notes/NoteEdit/types";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface IFormNoteEdit {
	register: UseFormRegister<INoteEditForm>;
	handleSubmit: UseFormHandleSubmit<INoteEditForm>;
	handleSubmitNoteEdit: (form: INoteEditForm) => void;
	errors: FieldErrors<INoteEditForm>;
}

export interface IFormNoteEditView extends IFormNoteEdit {
	linkPreviousPage: string;
}
