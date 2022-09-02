export interface IUseDialogNote {
    openDialogNewNote: () => void;
    closeDialogNewNote: () => void;
    openDialogEditNote: (noteID: string) => void;
    closeDialogEditNote: () => void;
    openDialogDeleteSingleNote: (noteID: string) => void;
    closeDialogDeleteSingleNote: () => void;
    openDialogDeleteAllNotes: () => void;
    closeDialogDeleteAllNotes: () => void;
}