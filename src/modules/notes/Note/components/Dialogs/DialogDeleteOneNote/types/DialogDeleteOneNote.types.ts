import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchResponseDefault } from "shared/common/types";

export interface IDialogDeleteOneNoteView {
	isOpenDialogDeleteOneNote: boolean;
	closeDialogDeleteOneNote: FunctionReturnsVoid;
	mutate: UseMutateFunction<AxiosResponse<IFetchResponseDefault>>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
