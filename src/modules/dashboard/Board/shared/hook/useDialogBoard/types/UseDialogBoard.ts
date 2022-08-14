export interface IUseDialogBoard {
    openDialogEditBoard: (closeMenu: () => void) => void;
    closeDialogEditBoard: () => void;
    openDialogDeleteSingleBoard: (closeMenu: () => void) => void;
    closeDialogDeleteSingleBoard: () => void;
}