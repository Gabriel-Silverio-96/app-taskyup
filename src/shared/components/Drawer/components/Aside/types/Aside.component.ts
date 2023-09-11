import { Palette } from "@mui/material";
import { IFetchGetMenuResponse } from "../service/types/Aside.service.types";

export interface IAsideView {
	palette: Palette;
	menu: IFetchGetMenuResponse | undefined;
	openAside: boolean;
	openDialog: boolean;
	toogleOpenAside: () => void;
	openDialogNewBoard: () => void;
	closeDialogNewBoard: () => void;
}
