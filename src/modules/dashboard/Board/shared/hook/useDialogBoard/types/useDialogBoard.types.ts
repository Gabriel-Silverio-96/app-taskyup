import { FunctionNonValueReturning } from "shared/types";

export interface IUseDialogBoard {
	openDialogEditBoard: (closeMenu: FunctionNonValueReturning) => void;
	closeDialogEditBoard: FunctionNonValueReturning;
	openDialogDeleteSingleBoard: (closeMenu: FunctionNonValueReturning) => void;
	closeDialogDeleteSingleBoard: FunctionNonValueReturning;
}
