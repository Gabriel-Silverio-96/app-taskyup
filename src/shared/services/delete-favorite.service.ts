import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IDeleteFavoriteService } from "shared/services/types";

export const deleteFavoriteService: IDeleteFavoriteService = async ({
	params,
}) => await api.delete<IFetchDefaultResponse>("/favorite", { params });
