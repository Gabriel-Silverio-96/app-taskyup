import { Palette } from "@mui/material";
import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderText {
	count: number | undefined;
}

export interface IHeaderTextView {
	data: IFetchGetOneBoardResponse | undefined;
	palette: Palette;
	isMediumScreen: boolean;
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
	toogleTemplates: FunctionReturnsVoid;
	isOpenTemplates: boolean;
	isDisabledDeleteAllTexts: boolean;
}
