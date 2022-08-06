import { IFetchBoard } from "shared/common/hook/useFetchBoard/types/UseFetchBoard.types";

export interface IAsideView {
    board: IFetchBoard[];
    openAside: boolean;
    openDialog: boolean;
    toogleOpenAside: () => void;
    openDialogNewBoard: () => void;
    closeDialogNewBoard: () => void;
}