export interface IFetchBoard {
	board_id: string;
	title: string;
	type_board: string;
	created_at: string;
	members_board: string[];
}

export interface IUseFetchBoard {
    isError: boolean;
    isLoading: boolean;
    board: IFetchBoard[] | any;
}