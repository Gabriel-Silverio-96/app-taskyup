import { IFetchGetPublicTextResponse } from "modules/texts/PublicText/services/types";

export interface IPublicTextView {
	isFetching: boolean;
	data: IFetchGetPublicTextResponse;
}
