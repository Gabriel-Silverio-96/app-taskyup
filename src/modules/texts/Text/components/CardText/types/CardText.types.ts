import { Palette } from "@mui/material";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface IText {
	text_id: string;
	title_text: string;
	created_at: string;
}

export interface IFetchGetAllTextsResponse {
	count: number;
	title: string;
	texts: IText[];
}

export interface ICardTextView {
	palette: Palette;
	data: IFetchGetAllTextsResponse | undefined;
	isFetching: boolean;
	handleClickCreateText: FunctionReturnsVoid;
	isCreatingText: boolean;
	board_id: string | undefined;
	openDialogDeleteOneText: (textID: string) => void;
}
