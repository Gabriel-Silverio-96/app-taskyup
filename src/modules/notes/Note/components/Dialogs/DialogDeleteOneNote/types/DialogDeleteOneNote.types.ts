import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IDialogDeleteOneNoteView {
	isOpenDialogDeleteOneNote: boolean;
	closeDialogDeleteOneNote: FunctionReturnsVoid;
	mutate: UseMutateFunction<AxiosResponse<IFetchResponseDefault>>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
