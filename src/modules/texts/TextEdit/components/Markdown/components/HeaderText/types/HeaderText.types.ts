import { ChangeEvent } from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderText {
	handleClickSaveText: FunctionReturnsVoid;
	titleBoard: string;
	titleText: string;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IHeaderTextView extends IHeaderText {
	handleClickOpenDialogShare: FunctionReturnsVoid;
	linkPreviousPage: string;
	isError: boolean;
	message: string;
}
