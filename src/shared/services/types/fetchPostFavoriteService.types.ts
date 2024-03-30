import { AxiosPromise } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IFetchPostFavoriteProps {
	body: {
		related_id: string;
		board_id: string | undefined;
		board_type_id: string;
	};
}

export interface IFetchPostFavoriteService {
	({ body }: IFetchPostFavoriteProps):
		| AxiosPromise<IFetchDefaultResponse>
		| any;
}
