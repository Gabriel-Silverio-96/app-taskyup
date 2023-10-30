import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogDeleteOneTextView {
	dialogDeleteOneText: { open: boolean; textID: string };
	closeDialogDeleteOneText: FunctionReturnsVoid;
	fetchDelete: FunctionReturnsVoid;
	isDeleting: boolean;
	onClose: FunctionReturnsVoid | (() => string);
}
