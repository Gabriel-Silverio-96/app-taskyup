import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

export interface IDialogNewBoard {
	openDialog: boolean;
	closeDialogNewBoard: () => void;
}

export interface IFetchPostCreateBoardService {
	title: string;
	board_type_id: string;
}

export interface IDialogNewBoardView extends IDialogNewBoard {
	register: UseFormRegister<any>;
	fullScreen: boolean;
	handleSubmit: UseFormHandleSubmit<any>;
	fetchDialogNewBoard: (data: IFetchPostCreateBoardService) => void;
	errors: FieldErrors<IFetchPostCreateBoardService>;
	isSaving: boolean;
}
