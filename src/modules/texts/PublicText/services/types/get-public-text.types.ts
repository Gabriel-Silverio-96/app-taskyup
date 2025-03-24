export interface IFetchGetPublicTextProps {
	params: {
		text_id: string | null;
	};
}
export interface IGetPublicTextService {
	({ params }: IFetchGetPublicTextProps): Promise<IGetPublicTextResponse>;
}

export interface IGetPublicTextResponse {
	author: string;
	text_id: string;
	text: string;
	created_at: string;
	title_text: string;
}
