import { UseMutateFunction } from "@tanstack/react-query";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IDialogDeleteAllTextsView {
	dialogDeleteAllText: { open: boolean; boardID: string };
	closeDialogDeleteAllTexts: FunctionReturnsVoid;
	mutate: UseMutateFunction<IFetchDefaultResponse>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
