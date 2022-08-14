export interface IDialogDeleteSingleBoard {
    isOpenDialogDeleteSingleBoard: boolean;
    closeDialogDeleteSingleBoard: () => void;
    fetchDeleteThisBoard: () => void;
    isDeleting: boolean;
}