import { Dispatch, SetStateAction } from "react";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { IDialogSearchAllState } from "shared/common/store/DialogSearchAll/types";
import { IPaginationModel } from "shared/common/types";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchGetSearchAllResponse } from "shared/components/Drawer/components/DialogSearchAll/services/types";

export interface IDialogSearchAllForm {
	query: string;
}

export interface IDialogSearchAllView {
	register: UseFormRegister<IDialogSearchAllForm>;
	handleSubmit: UseFormHandleSubmit<IDialogSearchAllForm>;
	dialogSearchAllSubmit: FunctionReturnsVoid;
	errors: FieldErrors<IDialogSearchAllForm>;
	dialogSearchAll: IDialogSearchAllState;
	handleClickCloseDialogSearchAll: FunctionReturnsVoid;
	data: IFetchGetSearchAllResponse | undefined;
	isLoading: boolean;
	paginationModel: IPaginationModel;
	setPaginationModel: Dispatch<SetStateAction<IPaginationModel>>;
}
