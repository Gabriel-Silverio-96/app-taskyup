import { IGetAllTextsResponse } from "modules/texts/Text/services/types";

export interface ITextView {
	data: IGetAllTextsResponse | undefined;
	isFetching: boolean;
}
