import { ChangeEvent } from "react";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IDataText {
	text: string;
	title_board: string;
	title_text: string;
	created_at: string;
}

export interface IMarkdownView {
	dataText: IDataText;
	onChangeText: (text: string) => void;
	handleClickSaveText: () => void;
	onChangeTextTitle: (event: ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
	isSaving: boolean;
}

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
