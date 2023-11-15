import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";

export interface IUseFetchGetOneBoard {
	<T = IFetchGetOneBoardResponse>(
		boardID: string | undefined,
		options?: Omit<UseQueryOptions, "queryKey" | "queryFn">
	): UseQueryResult<T | any, any>;
}

export interface IUseFetchGetSingleBoard {
	data: IFetchGetOneBoardResponse;
	isError: boolean;
	isFetching: boolean;
}
