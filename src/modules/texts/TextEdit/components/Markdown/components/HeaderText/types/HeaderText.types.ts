import { ChangeEvent } from "react";
import { FunctionReturnsVoid } from "shared/common/types";

export interface IHeaderText {
	handleClickSaveText: FunctionReturnsVoid;
	titleBoard: string;
	titleText: string;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
}
