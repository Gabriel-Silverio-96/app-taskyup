export interface IAsideView {
    openAside: boolean;
    openDialog: boolean;
    toogleOpenAside: () => void;
    openDialogNewBoard: () => void;
    closeDialogNewBoard: () => void;
}