export interface IDialogDeleteOneNoteView {
	isOpenDialogDeleteSingleNote: boolean;
	closeDialogDeleteSingleNote: () => void;
	handleClickDeleteOneNote: () => void;
	isDeleting: boolean;
}
