export interface IFetchGetPublicTextProps {
	params: {
		text_id: string | null;
	};
}
export interface IFetchGetPublicTextService {
	({
		params,
	}: IFetchGetPublicTextProps): Promise<IFetchGetPublicTextResponse>;
}

export interface IFetchGetPublicTextResponse {
	author: string;
	text_id: string;
	text: string;
	created_at: string;
	title_text: string;
}
