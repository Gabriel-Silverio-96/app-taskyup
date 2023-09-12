import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";

export interface IUseFetchGetSingleBoard {
	data: IFetchGetOneBoardResponse;
	isError: boolean;
	isFetching: boolean;
}
