export interface IDialogDeleteSingleTextView {
    dialogDeleteSingleText: { open: boolean, textID: string };
    closeDialogDeleteSingleText: () => void;
    fetchDelete: () => void;
    isDeleting: boolean;
}