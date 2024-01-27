import { TypeBoard } from "shared/common/types";

export interface IMemberBoard {
	first_name: string;
	full_name: string;
}

export interface IFetchGetBoardsResponse {
	board_id: string;
	title: string;
	type_board: TypeBoard;
	created_at: string;
	background_image: string;
	members_board: Array<IMemberBoard>;
}
