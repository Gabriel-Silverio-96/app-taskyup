import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchGetOneTextService {
	(text_id: string | null): Promise<IFetchGetOneTextResponse>;
}

export interface IFetchPatchTextPayload {
	board_id: string | null;
	text_id: string | null;
	data: IFetchGetOneTextResponse;
}

export interface IFetchPatchTextService {
	(payload: IFetchPatchTextPayload): Promise<IFetchResponseDefault>;
}

export interface IFetchGetOneTextResponse {
	title_board: string;
	title_text: string;
	text: string;
	created_at: string;
}
