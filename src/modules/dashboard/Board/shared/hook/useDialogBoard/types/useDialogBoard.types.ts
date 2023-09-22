import { FunctionNonValueReturning } from "shared/types";

export interface IUseDialogBoard {
	openDialogEditBoard: (closeMenu: FunctionNonValueReturning) => void;
	closeDialogEditBoard: FunctionNonValueReturning;
	openDialogDeleteOneBoard: (closeMenu: FunctionNonValueReturning) => void;
	closeDialogDeleteOneBoard: FunctionNonValueReturning;
}
