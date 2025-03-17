import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { FunctionReturnsVoid } from "shared/common/types";

export interface IDialogEditBoardForm {
	title: string;
	created_at: string;
}

export interface IDialogEditBoardView {
	register: UseFormRegister<IDialogEditBoardForm>;
	fullScreen: boolean;
	handleSubmit: UseFormHandleSubmit<IDialogEditBoardForm>;
	mutate: (form: IDialogEditBoardForm) => void;
	errors: FieldErrors<IDialogEditBoardForm>;
	isFetching: boolean;
	isSaving: boolean;
	isOpenDialogEditBoard: boolean;
	closeDialogEditBoard: FunctionReturnsVoid;
	onClose: FunctionReturnsVoid | (() => "");
	disabledIconButtonClose: boolean;
	valueCreatedAt: string;
}
