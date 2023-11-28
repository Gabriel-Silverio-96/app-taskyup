import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogDeleteAllTextsView {
	dialogDeleteAllText: { open: boolean; boardID: string };
	closeDialogDeleteAllTexts: FunctionReturnsVoid;
	fetchDeleteAll: FunctionReturnsVoid;
	isLoading: boolean;
	onClose: FunctionReturnsVoid;
}
