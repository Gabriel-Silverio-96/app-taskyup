import { Palette } from "@mui/material";

export interface IHeaderTextView {
	titleText: string;
	palette: Palette;
	isMediumScreen: boolean;
	openDialogDeleteAllTexts: (boardID: string) => void;
	board_id: string | undefined;
}
