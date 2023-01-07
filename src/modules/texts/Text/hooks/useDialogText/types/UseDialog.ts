export interface IUseDialogText {
    openDialogDeleteSingleText: (textID: string) => void;
    closeDialogDeleteSingleText: () => void;
    openDialogDeleteAllTexts: (boardID: string) => void;
    closeDialogDeleteAllTexts: () => void;
}