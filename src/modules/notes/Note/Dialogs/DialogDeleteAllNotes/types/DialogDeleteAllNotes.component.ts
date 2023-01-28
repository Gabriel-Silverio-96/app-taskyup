export interface IDialogDeleteAllNotesView {
    isOpenDialogDeleteAllNotes: boolean;
    closeDialogDeleteAllNotes: () => void;
    fetchDeleteAllNotes: () => any;
    isDeleting: boolean;
}