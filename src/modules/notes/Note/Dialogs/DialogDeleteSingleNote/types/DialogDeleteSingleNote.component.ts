export interface IDialogDeleteSingleNoteView {
    isOpenDialogDeleteSingleNote: boolean;
    closeDialogDeleteSingleNote: () => void;
    fetchDeleteSingleNote: () => void;
    isDeleting: boolean;
}