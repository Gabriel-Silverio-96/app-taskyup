export interface IUseDialogNote {
    openDialogNewNote: () => void;
    closeDialogNewNote: () => void;
    openDialogEditNote: (noteID: string) => void;
    closeDialogEditNote: () => void;
}