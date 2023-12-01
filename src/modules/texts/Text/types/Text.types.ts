import { AxiosResponse } from "axios";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import { IFetchGetAllTextsResponse } from "../services/types";

export interface IFetchPostTextResponse extends IFetchResponseDefault {
	text_id: string;
}

export interface IFetchPostTextBody {
	title_text: string;
	text: string;
}

export interface IFetchPostTextService {
	(board_id: string | undefined, body: IFetchPostTextBody): Promise<
		AxiosResponse<IFetchPostTextResponse>
	>;
}

export interface ITextView {
	data: IFetchGetAllTextsResponse | undefined;
	isFetching: boolean;
}
