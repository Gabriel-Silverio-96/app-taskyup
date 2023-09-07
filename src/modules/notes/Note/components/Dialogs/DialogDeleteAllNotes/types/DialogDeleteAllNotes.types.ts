export interface IDialogDeleteAllNotesView {
    isOpenDialogDeleteAllNotes: boolean;
    closeDialogDeleteAllNotes: () => void;
    dialogDeleteAllNotesSubmit: () => any;
    isDeleting: boolean;
}