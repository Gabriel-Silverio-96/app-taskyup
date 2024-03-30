import { AxiosPromise } from "axios";
import { IFetchDefaultResponse } from "shared/common/types";

export interface IFetchDeleteFavoriteProps {
	params: {
		favorite_id: string | null;
		board_id: string | undefined;
		related_id: string;
	};
}

export interface IFetchDeleteFavoriteService {
	({ params }: IFetchDeleteFavoriteProps):
		| AxiosPromise<IFetchDefaultResponse>
		| any;
}
