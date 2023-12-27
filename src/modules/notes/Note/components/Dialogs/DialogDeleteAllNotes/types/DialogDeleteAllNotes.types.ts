import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IDialogDeleteAllNotesView {
	isOpenDialogDeleteAllNotes: boolean;
	closeDialogDeleteAllNotes: FunctionReturnsVoid;
	mutate: UseMutateFunction<AxiosResponse<IFetchResponseDefault>>;
	isDeleting: boolean;
}
