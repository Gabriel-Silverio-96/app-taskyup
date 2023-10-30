import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogDeleteOneNoteView {
	isOpenDialogDeleteOneNote: boolean;
	closeDialogDeleteOneNote: FunctionReturnsVoid;
	handleClickDeleteOneNote: FunctionReturnsVoid;
	isDeleting: boolean;
}
