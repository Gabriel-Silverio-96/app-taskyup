import { Palette } from "@mui/material";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderText {
	count: number | undefined;
	title: string | undefined;
}

export interface IHeaderTextView {
	title: string | undefined;
	palette: Palette;
	isMediumScreen: boolean;
	handleOpenDialogDeleteAllTexts: FunctionReturnsVoid;
	toggleTemplatesVisibility: FunctionReturnsVoid;
	isOpenTemplates: boolean;
	isDisabledDeleteAllTexts: boolean;
}
