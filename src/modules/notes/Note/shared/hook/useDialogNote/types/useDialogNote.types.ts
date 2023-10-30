import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IUseDialogNote {
	openDialogEditNote: (noteID: string) => void;
	closeDialogEditNote: FunctionReturnsVoid;
	openDialogDeleteOneNote: (noteID: string) => void;
	closeDialogDeleteOneNote: FunctionReturnsVoid;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	closeDialogDeleteAllNotes: FunctionReturnsVoid;
}
