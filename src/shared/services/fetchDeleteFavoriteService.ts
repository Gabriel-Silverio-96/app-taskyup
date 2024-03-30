import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IFetchDeleteFavoriteService } from "shared/services/types";

export const fetchDeleteFavoriteService: IFetchDeleteFavoriteService = async ({
	params,
}) => await api.delete<IFetchDefaultResponse>("/favorite", { params });
