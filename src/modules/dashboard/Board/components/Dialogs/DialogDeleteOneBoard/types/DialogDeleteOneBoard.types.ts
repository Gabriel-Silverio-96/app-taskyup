import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IDialogDeleteOneBoardView {
	isOpenDialogDeleteOneBoard: boolean;
	closeDialogDeleteOneBoard: FunctionReturnsVoid;
	mutate: FunctionReturnsVoid;
	isLoading: boolean;
	onClose: FunctionReturnsVoid | (() => "");
}
