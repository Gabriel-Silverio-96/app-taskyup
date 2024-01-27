import { FunctionReturnsVoid } from "shared/common/types";

export interface IHeaderView {
	isOpen: boolean;
	toogleDropdown: FunctionReturnsVoid;
	toogleDropdownAway: FunctionReturnsVoid;
	handleClickOpenDialogSearchAll: FunctionReturnsVoid;
}
