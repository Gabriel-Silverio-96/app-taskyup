import { IFetchGetBoardsResponse } from "modules/dashboard/Board/services/types";

export interface IBoardView {
	data: IFetchGetBoardsResponse[] | undefined;
	isFetching: boolean;
	isShowDoodleMessage: boolean;
}
