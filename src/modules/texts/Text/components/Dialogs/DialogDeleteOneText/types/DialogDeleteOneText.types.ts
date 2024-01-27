import { UseMutateFunction } from "@tanstack/react-query";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IDialogDeleteOneTextView {
	dialogDeleteOneText: { open: boolean; textID: string };
	closeDialogDeleteOneText: FunctionReturnsVoid;
	mutate: UseMutateFunction<IFetchResponseDefault>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid | (() => string);
}
