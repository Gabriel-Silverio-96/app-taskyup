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

export interface IFetchPostBoardService {
	title: string;
	board_type_id: string;
}

export interface IDialogNewBoardView extends IDialogNewBoard {
	register: UseFormRegister<any>;
	fullScreen: boolean;
	handleSubmit: UseFormHandleSubmit<any>;
	handleSubmitCreateBoard: (data: IFetchPostBoardService) => void;
	errors: FieldErrors<IFetchPostBoardService>;
	isSaving: boolean;
}
