import { IFetchGetAllTextsResponse } from "modules/texts/Text/services/types";

export interface ITextView {
	data: IFetchGetAllTextsResponse | undefined;
	isFetching: boolean;
}
