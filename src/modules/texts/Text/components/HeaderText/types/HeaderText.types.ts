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
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
	toogleTemplates: FunctionReturnsVoid;
	isOpenTemplates: boolean;
	isDisabledDeleteAllTexts: boolean;
}
