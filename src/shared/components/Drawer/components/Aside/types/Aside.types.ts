import { Palette } from "@mui/material";
import { IFetchGetMenuResponse } from "shared/components/Drawer/components/Aside/services/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IOnNodeToggle {
	(event: React.SyntheticEvent, nodeIds: string[]): void;
}

export interface IAsideView {
	palette: Palette;
	data: IFetchGetMenuResponse | undefined;
	openAside: boolean;
	openDialog: boolean;
	toogleOpenAside: FunctionReturnsVoid;
	openDialogNewBoard: FunctionReturnsVoid;
	closeDialogNewBoard: FunctionReturnsVoid;
	treeViewExpanded: [] | string[];
	onNodeToggle: IOnNodeToggle;
}
