import { FunctionReturnsVoid } from "shared/common/types";

export interface IDropdown {
	children: React.ReactNode;
	open: boolean;
	toogleDropdown: FunctionReturnsVoid;
}

export interface IDropdownView extends IDropdown {
	logout: FunctionReturnsVoid;
	toogleDropdown: FunctionReturnsVoid;
}
