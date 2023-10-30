import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IUseDialogBoard {
	openDialogEditBoard: (closeMenu: FunctionReturnsVoid) => void;
	closeDialogEditBoard: FunctionReturnsVoid;
	openDialogDeleteOneBoard: (closeMenu: FunctionReturnsVoid) => void;
	closeDialogDeleteOneBoard: FunctionReturnsVoid;
}
