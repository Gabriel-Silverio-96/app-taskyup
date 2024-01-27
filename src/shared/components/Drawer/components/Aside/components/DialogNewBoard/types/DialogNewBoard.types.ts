import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types";

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
	mutate: (form: IDialogNewBoardForm) => void;
	errors: FieldErrors<IDialogNewBoardForm>;
	isLoading: boolean;
}
