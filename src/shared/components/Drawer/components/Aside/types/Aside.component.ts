import { Palette } from "@mui/material";
import { IFetchMenu } from "../service/types/Aside.service";

export interface IAsideView {
    palette: Palette;
    menu: IFetchMenu | undefined;
    openAside: boolean;
    openDialog: boolean;
    toogleOpenAside: () => void;
    openDialogNewBoard: () => void;
    closeDialogNewBoard: () => void;
}