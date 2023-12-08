import { AxiosPromise } from "axios";
import { IFetchResponseDefault } from "shared/common/types/Fetch";

export interface IFetchPatchTextPermissionsProps {
	body: {
		public: boolean;
	};
	params: {
		text_id: string | null;
		board_id: string | null;
	};
}

export interface IFetchPatchTextPermissionsService {
	({
		body,
		params,
	}: IFetchPatchTextPermissionsProps): AxiosPromise<IFetchResponseDefault>;
}
