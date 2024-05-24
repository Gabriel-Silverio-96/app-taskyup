import { serializeQueryParams } from "./serialize-query-params";
import { ICreateURLQueryParams } from "./types";

const createURLQueryParams: ICreateURLQueryParams = (baseURL, queryParams) => {
	const queryParamsKeys = Object.keys(queryParams);
	const concatenatedQueryParams = serializeQueryParams(
		queryParamsKeys,
		queryParams
	);

	return `${baseURL}?${concatenatedQueryParams}`;
};

export { createURLQueryParams };
