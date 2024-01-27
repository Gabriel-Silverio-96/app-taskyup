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
