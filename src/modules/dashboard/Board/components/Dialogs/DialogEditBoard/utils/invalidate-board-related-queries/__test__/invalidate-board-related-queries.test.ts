import {
	BOARD_QUERY_KEY,
	MENU_QUERY_KEY,
	NOTE_QUERY_KEY,
	TEXT_QUERY_KEY,
} from "shared/constants";
import { invalidateBoardRelatedQueries } from "../invalidate-board-related-queries";
import { QueryClient } from "@tanstack/react-query";

const queryClient = {
	invalidateQueries: jest.fn(),
} as unknown as QueryClient;

describe("Funtion invalidateBoardRelatedQueries()", () => {
	test("should call invalidateQueries for all query keys", async () => {
		await invalidateBoardRelatedQueries(queryClient);

		expect(queryClient.invalidateQueries).toHaveBeenCalledTimes(4);
		expect(queryClient.invalidateQueries).toHaveBeenCalledWith([
			BOARD_QUERY_KEY.FETCH_GET_BOARDS,
		]);
		expect(queryClient.invalidateQueries).toHaveBeenCalledWith([
			MENU_QUERY_KEY.FETCH_GET_MENU,
		]);
		expect(queryClient.invalidateQueries).toHaveBeenCalledWith([
			NOTE_QUERY_KEY.FETCH_GET_NOTES,
		]);
		expect(queryClient.invalidateQueries).toHaveBeenCalledWith([
			TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
		]);
	});
});
