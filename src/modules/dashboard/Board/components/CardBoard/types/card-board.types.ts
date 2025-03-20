import { IGetBoardsResponse } from "modules/dashboard/Board/services/types";

export interface ICardBoard {
	data: IGetBoardsResponse[] | undefined;
	isFetching: boolean;
}
