import { FunctionReturnsVoid } from "shared/common/types";
import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";

export interface IOnNodeToggle {
	(event: React.SyntheticEvent, nodeIds: string[]): void;
}

export interface IAsideView {
	data: IFetchGetMenuResponse | undefined;
	openAside: boolean;
	openDialog: boolean;
	toogleOpenAside: FunctionReturnsVoid;
	openDialogNewBoard: FunctionReturnsVoid;
	closeDialogNewBoard: FunctionReturnsVoid;
	treeViewExpanded: [] | string[];
	onNodeToggle: IOnNodeToggle;
}
