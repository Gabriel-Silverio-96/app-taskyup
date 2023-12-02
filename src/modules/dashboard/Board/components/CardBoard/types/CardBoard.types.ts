import { IFetchGetBoardsResponse } from "modules/dashboard/Board/components/CardBoard/services/types";

export interface ICardBoardView {
	data: IFetchGetBoardsResponse[] | undefined;
	isFetching: boolean;
}
