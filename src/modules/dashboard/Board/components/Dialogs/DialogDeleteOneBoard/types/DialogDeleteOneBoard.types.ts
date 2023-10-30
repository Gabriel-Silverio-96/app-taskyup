import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogDeleteOneBoardView {
	isOpenDialogDeleteOneBoard: boolean;
	closeDialogDeleteOneBoard: FunctionReturnsVoid;
	dialogDeleteOneBoardSubmit: FunctionReturnsVoid;
	isLoading: boolean;
}
