import { AxiosPromise } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface Params {
	board_id: string | undefined;
	body: {
		color_note: string;
		title_note: string;
		observation: string;
	};
}

export interface IPostCreateNoteService {
	({ board_id, body }: Params): AxiosPromise<IPostCreateNoteResponse> | any;
}

export interface IPostCreateNoteResponse extends IFetchDefaultResponse {
	results: {
		note_id: string;
	};
}
