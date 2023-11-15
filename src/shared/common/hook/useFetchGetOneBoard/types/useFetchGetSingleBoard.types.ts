import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

export interface IFetchGetOneBoardResponse {
	title: string;
	board_type_id: string;
	background_image: string;
	created_at: string;
}

export interface IUseFetchGetOneBoard {
	<T = IFetchGetOneBoardResponse>(
		boardID: string | undefined,
		options?: Omit<UseQueryOptions<any, any>, "queryKey" | "queryFn">
	): UseQueryResult<T, any>;
}
