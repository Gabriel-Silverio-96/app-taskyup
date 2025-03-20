import { IGetBoardsResponse } from "modules/dashboard/Board/services/types";

export interface IBoardView {
	data: IGetBoardsResponse[] | undefined;
	isFetching: boolean;
	isShowDoodleMessage: boolean;
}
