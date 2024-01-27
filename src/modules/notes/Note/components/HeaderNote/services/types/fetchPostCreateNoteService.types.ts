import { AxiosPromise } from "axios";
import { IFetchResponseDefault } from "shared/common/types";

export interface IFetchPostCreateNoteProps {
	board_id: string | undefined;
	body: {
		color_note: string;
		title_note: string;
		observation: string;
	};
}

export interface IFetchPostCreateNoteService {
	({ board_id, body }: IFetchPostCreateNoteProps):
		| AxiosPromise<IFetchPostCreateNoteResponse>
		| any;
}

export interface IFetchPostCreateNoteResponse extends IFetchResponseDefault {
	results: {
		note_id: string;
	};
}
