import { Dispatch, SetStateAction } from "react";
import {
	FieldErrors,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { IDialogSearchAllState } from "shared/common/store/DialogSearchAll/types/DialogSearchAll.types";
import { IPaginationModel } from "shared/common/types/AppTypes";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogSearchAllForm {
	query: string;
}

export interface IFetchGetSearchAllService {
	query: string;
	pageSize?: number;
	pageNumber?: number;
}

export interface IFetchGetSearchAllResponseResults {
	id: string;
	title: string;
	title_board: string;
	board_id: string;
	type_board: string;
}

export interface IFetchGetSearchAllResponse {
	pageSize: number;
	pageNumber: number;
	offset: number;
	countResult: number;
	results: Array<IFetchGetSearchAllResponseResults>;
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
