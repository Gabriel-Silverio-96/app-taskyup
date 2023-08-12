import { AxiosResponse } from "axios";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

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
