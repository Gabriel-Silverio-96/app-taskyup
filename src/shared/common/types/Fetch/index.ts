export interface IFetchResponseDefault {
	type_message: string;
	message: string;
}

export enum EnumStatusSuccessCode {
	OK = 200,
	Created = 201,
}

export enum EnumStatusErrorCode {
	Unauthorized = 401,
	Forbidden = 403,
	NotFound = 404,
	TooManyRequests = 429,
	InternalServerError = 500,
}

export interface IPhotos {
	id: number;
	width: number;
	height: number;
	url: string;
	photographer: string;
	photographer_url: string;
	photographer_id: number;
	avg_color: string;
	src: {
		original: string;
		large2x: string;
		large: string;
		medium: string;
		small: string;
		portrait: string;
		landscape: string;
		tiny: string;
	};
	liked: boolean;
	alt: string;
}

export interface IFetchSearchImages {
	page: number;
	per_page: number;
	photos: IPhotos[];
	total_results: number;
	next_page: string;
	error?: string;
}
