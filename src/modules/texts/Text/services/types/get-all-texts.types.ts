export interface IText {
	text_id: string;
	title_text: string;
	created_at: string;
}

export interface IGetAllTextsResponse {
	count: number;
	title: string;
	texts: IText[];
}
