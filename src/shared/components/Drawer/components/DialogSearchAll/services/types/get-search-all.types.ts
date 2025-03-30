export interface IFetchGetSearchAllProps {
	params: {
		query: string;
		pageSize?: number;
		pageNumber?: number;
	};
}

export interface IGetSearchAllService {
	({ params }: IFetchGetSearchAllProps): Promise<IGetSearchAllResponse>;
}

export interface IFetchGetSearchAllResponseResults {
	id: string;
	title: string;
	title_board: string;
	board_id: string;
	type_board: string;
}

export interface IGetSearchAllResponse {
	pageSize: number;
	pageNumber: number;
	offset: number;
	countResult: number;
	results: Array<IFetchGetSearchAllResponseResults>;
}
