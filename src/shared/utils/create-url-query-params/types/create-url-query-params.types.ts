export interface IQueryParams { 
    [ key: string ]: unknown;
}

export interface ICreateURLQueryParams {
   (baseUrl: string, queryParams: IQueryParams): string;
}

export interface ISerializeQueryParams {
    (queryParamsKeys: Array<string>, queryParams: IQueryParams): string;
}