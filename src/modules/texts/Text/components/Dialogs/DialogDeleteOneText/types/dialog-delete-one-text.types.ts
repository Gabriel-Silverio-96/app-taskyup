import { UseMutateFunction } from "@tanstack/react-query";
import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IDialogDeleteOneTextView {
	dialogDeleteOneText: { open: boolean; textID: string };
	closeDialogDeleteOneText: FunctionReturnsVoid;
	mutate: UseMutateFunction<IFetchDefaultResponse>;
	isLoading: boolean;
	onClose: FunctionReturnsVoid | (() => string);
}
