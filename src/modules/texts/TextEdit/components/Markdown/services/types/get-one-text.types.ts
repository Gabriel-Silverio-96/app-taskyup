export interface IGetOneTextResponse {
	title_board: string;
	title_text: string;
	text: string;
	created_at: string;
	public: boolean;
}

export interface IGetOneTextService {
	(textID: string | null): Promise<IGetOneTextResponse>;
}
