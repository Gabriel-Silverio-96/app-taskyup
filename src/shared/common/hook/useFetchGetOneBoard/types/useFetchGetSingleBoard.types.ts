import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";

export interface IUseFetchGetOneBoard {
	<T = IFetchGetOneBoardResponse | undefined>(
		boardID: string | undefined,
		options?: Omit<UseQueryOptions<any, any>, "queryKey" | "queryFn">
	): UseQueryResult<T, any>;
}

export interface IUseFetchGetSingleBoard {
	data: IFetchGetOneBoardResponse;
	isError: boolean;
	isFetching: boolean;
}
