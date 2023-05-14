import { Palette } from "@mui/material";
import { IFetchGetSingleBoard } from "shared/common/hook/useFetchGetSingleBoard/types/useFetchGetSingleBoard.types";

export interface IHeaderTextView {
	data: IFetchGetSingleBoard | undefined;
	countText: number;
	palette: Palette;
	isMediumScreen: boolean;
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
	toogleTemplates: () => void;
	isOpenTemplates: boolean;
}
