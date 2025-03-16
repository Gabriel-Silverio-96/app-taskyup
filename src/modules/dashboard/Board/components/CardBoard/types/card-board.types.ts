import { IFetchGetBoardsResponse } from "modules/dashboard/Board/services/types";

export interface ICardBoard {
	data: IFetchGetBoardsResponse[] | undefined;
	isFetching: boolean;
}
