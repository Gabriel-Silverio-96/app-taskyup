export interface IFetchGetSearchAllProps {
	params: {
		query: string;
		pageSize?: number;
		pageNumber?: number;
	};
}

export interface IFetchGetSearchAllService {
	({ params }: IFetchGetSearchAllProps): Promise<IFetchGetSearchAllResponse>;
}

export interface IFetchGetSearchAllResponseResults {
	id: string;
	title: string;
	title_board: string;
	board_id: string;
	type_board: string;
}

export interface IFetchGetSearchAllResponse {
	pageSize: number;
	pageNumber: number;
	offset: number;
	countResult: number;
	results: Array<IFetchGetSearchAllResponseResults>;
}
