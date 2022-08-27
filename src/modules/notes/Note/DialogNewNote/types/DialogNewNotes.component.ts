import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { IDialogNewNoteForm } from "../../shared/types";

export interface IDialogNewNoteView {
    fullScreen: boolean;
    register: UseFormRegister<IDialogNewNoteForm>;
    handleSubmit: UseFormHandleSubmit<IDialogNewNoteForm>;
    fetchDialogNewNote: (dataNewNote: IDialogNewNoteForm) => void;
    errors: FieldErrors<IDialogNewNoteForm>;
    isOpenDialogNewNote: boolean;
    closeDialogNewNote: () => void;
    isSaving: boolean;
}