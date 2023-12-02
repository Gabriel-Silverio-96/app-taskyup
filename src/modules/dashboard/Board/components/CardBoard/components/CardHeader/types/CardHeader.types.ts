import { TypeBoard } from "shared/common/types/AppTypes";

export interface ICardHeader {
	type_board: TypeBoard;
	board_id: string;
	isFetching: boolean;
}
