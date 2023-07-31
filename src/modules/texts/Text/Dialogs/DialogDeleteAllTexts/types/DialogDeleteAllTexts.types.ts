export interface IDialogDeleteAllTextsView {
    dialogDeleteAllText: { open: boolean, boardID: string };
    closeDialogDeleteAllTexts: () => void;
    fetchDeleteAll: () => void;
    isDeleting: boolean;
}