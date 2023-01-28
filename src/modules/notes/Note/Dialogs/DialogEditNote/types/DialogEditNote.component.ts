import { IDialogNoteForm } from "modules/notes/Note/shared/types";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFetchSingleNote {
    color_note: string;
    title_note: string;
    observation: string;
    created_at: string;
}

export interface IEditNoteData {
    form: IDialogNoteForm;
    noteID: string;
    boardID: string | undefined;
}

export interface IDialogEditNoteView {
    fullScreen: boolean;
    closeDialogEditNote: () => void;
    isOpenDialogEditNote: boolean;
    register: UseFormRegister<IDialogNoteForm>;
    handleSubmit: UseFormHandleSubmit<IDialogNoteForm>;
    fetchDialogEditNote: (dataEditNote: IDialogNoteForm) => void;
    isLoading: boolean;
    isSaving: boolean;
    errors: FieldErrors<IDialogNoteForm>;
}