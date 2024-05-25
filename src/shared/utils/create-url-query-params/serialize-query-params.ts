import { ISerializeQueryParams } from "./types";

const serializeQueryParams: ISerializeQueryParams = (
	queryParamsKeys,
	queryParams
): string => queryParamsKeys.map(key => `${key}=${queryParams[key]}`).join("&");

export { serializeQueryParams };