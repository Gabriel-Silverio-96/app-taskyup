export interface IDialogDeleteOneTextView {
	dialogDeleteOneText: { open: boolean; textID: string };
	closeDialogDeleteOneText: () => void;
	fetchDelete: () => void;
	isDeleting: boolean;
	onClose: () => void | string;
}
