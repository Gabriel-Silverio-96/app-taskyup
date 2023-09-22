export interface IUseDialogText {
	openDialogDeleteOneText: (textID: string) => void;
	closeDialogDeleteOneText: () => void;
	openDialogDeleteAllTexts: (boardID: string) => void;
	closeDialogDeleteAllTexts: () => void;
}
