import { AxiosResponse } from "axios";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchPostTextResponse extends IFetchResponseDefault {
	text_id: string;
}

export interface IFetchPostTextProps {
	board_id: string | undefined;
	body: {
		title_text: string;
		text: string;
	};
}

export interface IFetchPostTextService {
	({ board_id, body }: IFetchPostTextProps): Promise<
		AxiosResponse<IFetchPostTextResponse>
	>;
}
