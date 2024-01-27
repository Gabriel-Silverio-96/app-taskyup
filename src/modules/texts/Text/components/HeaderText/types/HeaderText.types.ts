import { FunctionReturnsVoid } from "shared/common/types";

export interface IHeaderText {
	count: number | undefined;
	title: string | undefined;
}

export interface IHeaderTextView {
	title: string | undefined;
	handleOpenDialogDeleteAllTexts: FunctionReturnsVoid;
	toggleTemplatesVisibility: FunctionReturnsVoid;
	defineColorIcon: string;
	isDisabledDeleteAllTexts: boolean;
}
