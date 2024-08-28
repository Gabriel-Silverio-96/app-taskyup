import api from "shared/services/api";
import {
	IFetchPostFavoriteResponse,
	IFetchPostFavoriteService,
} from "shared/services/types";

export const fetchPostFavoriteService: IFetchPostFavoriteService = async ({
	body,
}) => await api.post<IFetchPostFavoriteResponse>("/favorite", body);
