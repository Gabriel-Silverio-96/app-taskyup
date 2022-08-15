import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IDialogNewBoard {
    openDialog: boolean;
    closeDialogNewBoard: () => void;
}

export interface IDialogNewBoardForm {
    title: string;
    board_type_id: string;
}

export interface IDialogNewBoardView extends IDialogNewBoard {
    register: UseFormRegister<any>;
    fullScreen: boolean;    
    handleSubmit: UseFormHandleSubmit<any>;
    fetchDialogNewBoard: (dataNewBoard: IDialogNewBoardForm) => void;
    errors: FieldErrors<IDialogNewBoardForm>;
    isSaving: boolean;
}