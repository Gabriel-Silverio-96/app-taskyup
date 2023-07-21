import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

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
    register:  UseFormRegister<INoteEditForm>;
    handleSubmit: UseFormHandleSubmit<INoteEditForm>;
    noteEditSubmit: (form: INoteEditForm) => void;
    errors: FieldErrors<INoteEditForm>;
    isFetching: boolean;
    isSaving: boolean;
}

export interface IFetchPutNoteService {
    payload: INoteEditForm;
    note_id: string | null;
    board_id: string | null;
}