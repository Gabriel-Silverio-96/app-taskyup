import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IDialogDeleteAllNotesView {
	isOpenDialogDeleteAllNotes: boolean;
	closeDialogDeleteAllNotes: FunctionReturnsVoid;
	mutate: UseMutateFunction<AxiosResponse<IFetchDefaultResponse>>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
