import { ChangeEvent } from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IDataText } from "modules/texts/TextEdit/components/Markdown/types";

export interface IHeaderText {
	handleClickSaveText: FunctionReturnsVoid;
	titleBoard: string;
	titleText: string;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface IHeaderTextView extends IHeaderText {
	dataText: IDataText;
	handleClickOpenDialogShare: FunctionReturnsVoid;
	linkPreviousPage: string;
	isError: boolean;
	message: string;
}
