import { IDataText } from "modules/texts/TextEdit/types";
import { ChangeEvent } from "react";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IMarkdownView {
	dataText: IDataText;
	onChangeText: (text: string) => void;
	handleClickSaveText: FunctionReturnsVoid;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
	isSaving: boolean;
}
