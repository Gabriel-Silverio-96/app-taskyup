import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogNewBoard {
	openDialog: boolean;
	closeDialogNewBoard: FunctionReturnsVoid;
}

export interface IDialogNewBoardForm {
	title: string;
	board_type_id: string;
}

export interface IDialogNewBoardView extends IDialogNewBoard {
	register: UseFormRegister<IDialogNewBoardForm>;
	fullScreen: boolean;
	handleSubmit: UseFormHandleSubmit<IDialogNewBoardForm>;
	handleSubmitCreateBoard: (form: IDialogNewBoardForm) => void;
	errors: FieldErrors<IDialogNewBoardForm>;
	isLoading: boolean;
}
