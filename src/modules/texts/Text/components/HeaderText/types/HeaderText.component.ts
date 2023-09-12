import { Palette } from "@mui/material";
import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";

export interface IHeaderTextView {
	data: IFetchGetOneBoardResponse | undefined;
	countText: number;
	palette: Palette;
	isMediumScreen: boolean;
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
	toogleTemplates: () => void;
	isOpenTemplates: boolean;
}
