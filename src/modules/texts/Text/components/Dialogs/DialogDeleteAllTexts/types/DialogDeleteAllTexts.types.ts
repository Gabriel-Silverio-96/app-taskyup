import { UseMutateFunction } from "@tanstack/react-query";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchResponseDefault } from "shared/common/types";

export interface IDialogDeleteAllTextsView {
	dialogDeleteAllText: { open: boolean; boardID: string };
	closeDialogDeleteAllTexts: FunctionReturnsVoid;
	mutate: UseMutateFunction<IFetchResponseDefault>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
