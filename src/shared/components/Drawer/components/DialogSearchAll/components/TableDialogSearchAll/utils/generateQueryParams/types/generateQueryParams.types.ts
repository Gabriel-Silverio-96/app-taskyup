import { TypeBoard } from "shared/common/types/AppTypes";

export interface IGenerateQueryParams {
	id: string;
	type_board: TypeBoard;
	board_id: string;
}

export interface IGenerateQueryParamsReturn {
	board_id: string;
	text_id?: string;
	note_id?: string;
	[key: string]: string | undefined;
}
