import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IFetchPostFavoriteService } from "shared/services/types";

export const fetchPostFavoriteService: IFetchPostFavoriteService = async ({
	body,
}) => await api.post<IFetchDefaultResponse>("/favorite", body);
