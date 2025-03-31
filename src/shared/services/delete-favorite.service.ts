import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import { IDeleteFavoriteService } from "shared/services/types";

/**
 * Sends a DELETE request to remove a favorite item.
 *
 * @remarks
 * This service is used in **Notes, Kanban, and Texts** to remove a favorite entry.
 */
export const deleteFavoriteService: IDeleteFavoriteService = async ({
	params,
}) => await api.delete<IFetchDefaultResponse>("/favorite", { params });
