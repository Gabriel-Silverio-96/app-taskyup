export interface IFetchResponseDefault {
    type_message: string;
    message: string;
}

export interface IFetchSingleBoard {
    title: string;
    board_type_id: string;
    created_at: string;
}

export enum EStatusSuccessCode {
    OK = 200,
    Created = 201,
}

export enum EStatusErrorCode {
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    TooManyRequests = 429,
    InternalServerError = 500,			
}