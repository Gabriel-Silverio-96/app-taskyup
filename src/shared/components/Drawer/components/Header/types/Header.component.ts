import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderView {
	isOpen: boolean;
	currentPageTitle: string | undefined;
	toogleDropdown: FunctionReturnsVoid;
	toogleDropdownAway: FunctionReturnsVoid;
	handleClickOpenDialogSearchAll: FunctionReturnsVoid;
}
