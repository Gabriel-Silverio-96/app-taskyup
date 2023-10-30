import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

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
	closeDialogEditBoard: FunctionReturnsVoid;
}

export interface IFetchPatchBoardService {
	form: IDialogEditBoardForm;
	boardID: string;
	background_image: string;
}
