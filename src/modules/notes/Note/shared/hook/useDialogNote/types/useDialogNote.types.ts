import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IUseDialogNote {
	openDialogDeleteOneNote: (noteID: string) => void;
	closeDialogDeleteOneNote: FunctionReturnsVoid;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	closeDialogDeleteAllNotes: FunctionReturnsVoid;
}
