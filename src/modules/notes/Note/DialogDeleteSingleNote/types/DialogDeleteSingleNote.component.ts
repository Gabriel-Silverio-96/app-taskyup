export interface IDialogDeleteSingleNoteView {
    isOpenDialogDeleteSingleNote: boolean;
    closeDialogDeleteSingleNote: () => void;
    fetchDeleteThisNote: () => void;
    isDeleting: boolean;
}