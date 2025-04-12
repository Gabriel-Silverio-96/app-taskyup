import { FunctionReturnsVoid } from "shared/common/types";
import { IGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export interface IOnNodeToggle {
	(event: React.SyntheticEvent, nodeIds: string[]): void;
}

export interface IAsideView {
	data: IGetMenuResponse | undefined;
	openAside: boolean;
	openDialog: boolean;
	toogleOpenAside: FunctionReturnsVoid;
	openDialogNewBoard: FunctionReturnsVoid;
	closeDialogNewBoard: FunctionReturnsVoid;
	treeViewExpanded: [] | string[];
	onNodeToggle: IOnNodeToggle;
	isSmallScreen: boolean;
}
