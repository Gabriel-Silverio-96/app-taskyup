export type TypeQueryParams = { [ key: string ]: unknown };

export interface ICreateURLQueryParams {
   (baseUrl: string, queryParams: TypeQueryParams): string;
}

export interface ISerializeQueryParams {
    (queryParamsKeys: Array<string>, queryParams: TypeQueryParams): string;
}