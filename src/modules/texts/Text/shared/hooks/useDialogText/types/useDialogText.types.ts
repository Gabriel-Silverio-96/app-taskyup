import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IUseDialogText {
	openDialogDeleteOneText: (textID: string) => void;
	closeDialogDeleteOneText: FunctionReturnsVoid;
	openDialogDeleteAllTexts: (boardID: string) => void;
	closeDialogDeleteAllTexts: FunctionReturnsVoid;
}
