import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderView {
	isOpen: boolean;
	toogleDropdown: FunctionReturnsVoid;
	toogleDropdownAway: FunctionReturnsVoid;
	handleClickOpenDialogSearchAll: FunctionReturnsVoid;
}
