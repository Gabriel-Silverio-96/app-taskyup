import api from "shared/services/api";
import {
	IPostFavoriteResponse,
	IPostFavoriteService,
} from "shared/services/types";

/**
 * Sends a POST request to add a favorite item.
 *
 * @remarks
 * This service is used in various modules, including **Notes, Kanban, and Texts**.
 */
export const postFavoriteService: IPostFavoriteService = async ({ body }) =>
	await api.post<IPostFavoriteResponse>("/favorite", body);
