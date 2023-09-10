export interface IDialogDeleteOneTextView {
    dialogDeleteSingleText: { open: boolean, textID: string };
    closeDialogDeleteSingleText: () => void;
    fetchDelete: () => void;
    isDeleting: boolean;
    onClose: () => void | string;
}