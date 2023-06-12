import { Palette } from "@mui/material";
import { IFetchGetOneBoard } from "shared/common/types/Fetch";

export interface IHeaderTextView {
	data: IFetchGetOneBoard | undefined;
	countText: number;
	palette: Palette;
	isMediumScreen: boolean;
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
	toogleTemplates: () => void;
	isOpenTemplates: boolean;
}
