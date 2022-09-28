import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IDialogEditBoardForm {
    title?: string;
    created_at?: string;
}

export interface IDialogEditBoardView {
    register: UseFormRegister<IDialogEditBoardForm>;
    fullScreen: boolean;
    handleSubmit: UseFormHandleSubmit<IDialogEditBoardForm>;
    fetchDialogEditBoard: (form: IDialogEditBoardForm) => void;
    errors: FieldErrors<IDialogEditBoardForm>;
    isLoading: boolean;
    isSaving: boolean;
    isOpenDialogEditBoard: boolean;
    closeDialogEditBoard: () => void;
}