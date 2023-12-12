export interface IFetchGetOneTextResponse {
	title_board: string;
	title_text: string;
	text: string;
	created_at: string;
	public: boolean;
}

export interface IFetchGetOneTextService {
	(text_id: string | null): Promise<IFetchGetOneTextResponse>;
}
