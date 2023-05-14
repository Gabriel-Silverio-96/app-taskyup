export interface IFetchGetSingleBoard {
	title: string;
	board_type_id: string;
	background_image: string;
	created_at: string;
}

export interface IUseFetchGetSingleBoard {
    data: IFetchGetSingleBoard;
    isError: boolean;
    isFetching: boolean;
}