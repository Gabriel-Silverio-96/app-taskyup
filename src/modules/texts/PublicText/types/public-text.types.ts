import { IGetPublicTextResponse } from "modules/texts/PublicText/services/types";

export interface IPublicTextView {
	isFetching: boolean;
	data: IGetPublicTextResponse | any;
}
