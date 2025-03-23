import { FunctionReturnsVoid } from "shared/common/types";

export interface IUseDialogNote {
	openDialogDeleteOneNote: (noteID: string) => void;
	closeDialogDeleteOneNote: FunctionReturnsVoid;
	openDialogDeleteAllNotes: FunctionReturnsVoid;
	closeDialogDeleteAllNotes: FunctionReturnsVoid;
}
