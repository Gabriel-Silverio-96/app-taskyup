import { Palette } from "@mui/material";
import { IFetchGetOneBoardResponse } from "shared/common/hook/useFetchGetOneBoard/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IHeaderTextView {
	data: IFetchGetOneBoardResponse | undefined;
	countText: number;
	palette: Palette;
	isMediumScreen: boolean;
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
	toogleTemplates: FunctionReturnsVoid;
	isOpenTemplates: boolean;
}
