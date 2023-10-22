export interface IFetchGetPublicTextService {
	params: {
		text_id: string | null;
	};
}

export interface IFetchGetPublicTextResponse {
	author: string;
	text_id: string;
	text: string;
	created_at: string;
	title_text: string;
}
