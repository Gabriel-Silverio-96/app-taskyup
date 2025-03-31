import { AxiosPromise } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IPostFavoriteParams {
	body: {
		related_id: string;
		board_id: string | undefined;
		board_type_id: string;
	};
}

export interface IPostFavoriteResponse extends IFetchDefaultResponse {
	results: {
		favorite_id: string;
	};
}

export interface IPostFavoriteService {
	({ body }: IPostFavoriteParams): AxiosPromise<IPostFavoriteResponse>;
}
