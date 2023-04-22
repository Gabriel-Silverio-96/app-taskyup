import { ChangeEvent } from "react";

export interface IHeaderText {
	saveText: () => void;
	titleBoard: string;
	titleText: string;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IHeaderTextView extends IHeaderText {
	backPage: string;
	disableButtonSave: boolean;
	handleMessageError: false | string;
}