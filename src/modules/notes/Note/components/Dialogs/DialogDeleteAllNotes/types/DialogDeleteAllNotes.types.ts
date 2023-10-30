import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogDeleteAllNotesView {
	isOpenDialogDeleteAllNotes: boolean;
	closeDialogDeleteAllNotes: FunctionReturnsVoid;
	dialogDeleteAllNotesSubmit: () => any;
	isDeleting: boolean;
}
