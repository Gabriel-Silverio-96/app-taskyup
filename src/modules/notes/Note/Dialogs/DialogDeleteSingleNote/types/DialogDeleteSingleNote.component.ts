export interface IDialogDeleteSingleNoteView {
    isOpenDialogDeleteSingleNote: boolean;
    closeDialogDeleteSingleNote: () => void;
    dialogDeleteOneNoteSubmit: () => void;
    isDeleting: boolean;
}