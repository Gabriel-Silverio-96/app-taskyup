import { IFetchGetAllTextsResponse } from "modules/texts/Text/components/CardText/services/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface ICardTextView {
	data: IFetchGetAllTextsResponse | undefined;
	isFetching: boolean;
	handleClickCreateText: FunctionReturnsVoid;
	isCreatingText: boolean;
	board_id: string | undefined;
}
