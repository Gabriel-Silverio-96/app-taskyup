import { AxiosPromise } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IPatchTextPermissionsParams {
	body: {
		public: boolean;
	};
	params: {
		text_id: string | null;
		board_id: string | null;
	};
}

export interface IPatchTextPermissionsService {
	({
		body,
		params,
	}: IPatchTextPermissionsParams): AxiosPromise<IFetchDefaultResponse>;
}
