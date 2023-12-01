export interface IText {
	text_id: string;
	title_text: string;
	created_at: string;
}

export interface IFetchGetAllTextsResponse {
	count: number;
	title: string;
	texts: IText[];
}
