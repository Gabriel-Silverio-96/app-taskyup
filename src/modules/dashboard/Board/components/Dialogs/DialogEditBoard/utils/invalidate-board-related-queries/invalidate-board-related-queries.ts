import { QueryClient } from "@tanstack/react-query";
import {
	BOARD_QUERY_KEY,
	MENU_QUERY_KEY,
	NOTE_QUERY_KEY,
	TEXT_QUERY_KEY,
} from "shared/constants";

/**
 * Invalidates cached queries related to boards, menus, notes, and texts.
 * This ensures that the latest data is fetched from the server.
 *
 * @param {QueryClient} queryClient - The instance of QueryClient used to manage cached queries.
 * @returns {Promise<void>} A promise that resolves when all queries are invalidated.
 */
const invalidateBoardRelatedQueries = async (
	queryClient: QueryClient
): Promise<void> => {
	await Promise.all([
		queryClient.invalidateQueries([BOARD_QUERY_KEY.FETCH_GET_BOARDS]),
		queryClient.invalidateQueries([MENU_QUERY_KEY.FETCH_GET_MENU]),
		queryClient.invalidateQueries([NOTE_QUERY_KEY.FETCH_GET_NOTES]),
		queryClient.invalidateQueries([TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS]),
	]);
};

export { invalidateBoardRelatedQueries };
