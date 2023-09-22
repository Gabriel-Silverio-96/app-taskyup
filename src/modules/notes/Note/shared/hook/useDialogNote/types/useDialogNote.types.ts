export interface IUseDialogNote {
	openDialogNewNote: () => void;
	closeDialogNewNote: () => void;
	openDialogEditNote: (noteID: string) => void;
	closeDialogEditNote: () => void;
	openDialogDeleteOneNote: (noteID: string) => void;
	closeDialogDeleteOneNote: () => void;
	openDialogDeleteAllNotes: () => void;
	closeDialogDeleteAllNotes: () => void;
}
