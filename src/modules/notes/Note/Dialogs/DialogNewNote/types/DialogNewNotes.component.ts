import { IDialogNoteForm } from "modules/notes/Note/shared/types";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IDialogNewNoteView {
    fullScreen: boolean;
    register: UseFormRegister<IDialogNoteForm>;
    handleSubmit: UseFormHandleSubmit<IDialogNoteForm>;
    fetchDialogNewNote: (dataNewNote: IDialogNoteForm) => void;
    errors: FieldErrors<IDialogNoteForm>;
    isOpenDialogNewNote: boolean;
    closeDialogNewNote: () => void;
    isSaving: boolean;
}

export interface ICreateNoteData {
    form: IDialogNoteForm;
    boardID: string | undefined;
}