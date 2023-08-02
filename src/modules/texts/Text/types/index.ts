import { AxiosResponse } from "axios";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchCreateText extends IFetchResponseDefault {
	text_id: string;
}

export interface IFetchTextBody {
	title_text: string;
	text: string;
}

export interface IFetchPostTextService {
	(board_id: string | undefined, body: IFetchTextBody): Promise<
		AxiosResponse<IFetchCreateText>
	>;
}
