import { IFetchMenu } from "../service/types/Aside.service";

export interface IAsideView {
    menu: IFetchMenu | undefined;
    openAside: boolean;
    openDialog: boolean;
    toogleOpenAside: () => void;
    openDialogNewBoard: () => void;
    closeDialogNewBoard: () => void;
}