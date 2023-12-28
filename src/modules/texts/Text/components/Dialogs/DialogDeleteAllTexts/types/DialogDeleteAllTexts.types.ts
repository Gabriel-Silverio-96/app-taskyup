import { UseMutateFunction } from "@tanstack/react-query";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IDialogDeleteAllTextsView {
	dialogDeleteAllText: { open: boolean; boardID: string };
	closeDialogDeleteAllTexts: FunctionReturnsVoid;
	mutate: UseMutateFunction<IFetchResponseDefault>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
