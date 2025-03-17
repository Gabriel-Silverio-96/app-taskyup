import { FunctionReturnsVoid } from "shared/common/types";

export interface IDialogDeleteOneBoardView {
	isOpenDialogDeleteOneBoard: boolean;
	closeDialogDeleteOneBoard: FunctionReturnsVoid;
	mutate: FunctionReturnsVoid;
	isLoading: boolean;
	onClose: FunctionReturnsVoid | (() => "");
}
