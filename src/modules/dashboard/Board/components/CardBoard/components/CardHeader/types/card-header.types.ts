import { TypeBoard } from "shared/common/types";

export interface ICardHeader {
	type_board: TypeBoard;
	board_id: string;
	isFetching: boolean;
}
