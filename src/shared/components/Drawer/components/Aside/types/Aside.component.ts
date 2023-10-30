import { Palette } from "@mui/material";
import { IFetchGetMenuResponse } from "../service/types/Aside.service.types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IAsideView {
	palette: Palette;
	menu: IFetchGetMenuResponse | undefined;
	openAside: boolean;
	openDialog: boolean;
	toogleOpenAside: FunctionReturnsVoid;
	openDialogNewBoard: FunctionReturnsVoid;
	closeDialogNewBoard: FunctionReturnsVoid;
}
