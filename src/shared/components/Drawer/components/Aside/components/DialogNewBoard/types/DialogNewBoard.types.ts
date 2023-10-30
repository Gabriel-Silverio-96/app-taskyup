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

export interface IFetchPostCreateBoardService {
	title: string;
	board_type_id: string;
}

export interface IDialogNewBoardView extends IDialogNewBoard {
	register: UseFormRegister<any>;
	fullScreen: boolean;
	handleSubmit: UseFormHandleSubmit<any>;
	handleSubmitCreateBoard: (data: IFetchPostCreateBoardService) => void;
	errors: FieldErrors<IFetchPostCreateBoardService>;
	isSaving: boolean;
}
