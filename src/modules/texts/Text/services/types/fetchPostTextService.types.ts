import { AxiosResponse } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IFetchPostTextResponse extends IFetchDefaultResponse {
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
