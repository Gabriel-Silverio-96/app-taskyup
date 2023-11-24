import { Palette } from "@mui/material";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";
import { IFetchGetAllTextsResponse } from "modules/texts/Text/components/CardText/service/types";

export interface ICardTextView {
	palette: Palette;
	data: IFetchGetAllTextsResponse | undefined;
	isFetching: boolean;
	handleClickCreateText: FunctionReturnsVoid;
	isCreatingText: boolean;
	board_id: string | undefined;
	openDialogDeleteOneText: (textID: string) => void;
}
