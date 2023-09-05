export interface IDialogDeleteOneNoteView {
    isOpenDialogDeleteSingleNote: boolean;
    closeDialogDeleteSingleNote: () => void;
    dialogDeleteOneNoteSubmit: () => void;
    isDeleting: boolean;
}