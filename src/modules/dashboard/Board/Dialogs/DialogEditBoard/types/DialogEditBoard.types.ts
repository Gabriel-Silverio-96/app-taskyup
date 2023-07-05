import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IDialogEditBoardForm {
    title?: string;
    created_at?: string;
}

export interface IDialogEditBoardView {
    register: UseFormRegister<IDialogEditBoardForm>;
    fullScreen: boolean;
    handleSubmit: UseFormHandleSubmit<IDialogEditBoardForm>;
    dialogEditBoardSubmit: (form: IDialogEditBoardForm) => void;
    errors: FieldErrors<IDialogEditBoardForm>;
    isLoading: boolean;
    isSaving: boolean;
    isOpenDialogEditBoard: boolean;
    closeDialogEditBoard: () => void;
}

export interface IFetchPatchBoardService {
	form: IDialogEditBoardForm;
	boardID: string;
	background_image: string;
}