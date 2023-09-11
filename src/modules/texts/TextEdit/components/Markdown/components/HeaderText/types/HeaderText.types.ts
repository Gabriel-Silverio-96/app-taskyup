import { ChangeEvent } from "react";

export interface IHeaderText {
	handleClickSaveText: () => void;
	titleBoard: string;
	titleText: string;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IHeaderTextView extends IHeaderText {
	linkPreviousPage: string;
	disableButtonSave: boolean;
	showMessageError: false | string;
}
