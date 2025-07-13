import { MouseDownEvent } from "emoji-picker-react/dist/config/config";
import { INoteEditForm } from "modules/notes/NoteEdit/types";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types";

export interface IFormNoteEdit {
	register: UseFormRegister<INoteEditForm>;
	handleSubmit: UseFormHandleSubmit<INoteEditForm>;
	mutate: (form: INoteEditForm) => void;
	errors: FieldErrors<INoteEditForm>;
	setValue: UseFormSetValue<INoteEditForm>;
	watch: UseFormWatch<INoteEditForm>;
}

export interface IFormNoteEditView extends Omit<IFormNoteEdit, "setValue"> {
	linkPreviousPage: string;
	onEmojiClick: MouseDownEvent;
	onEmojiRemove: FunctionReturnsVoid;
}
