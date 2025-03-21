import { QueryClient } from "@tanstack/react-query";

export interface Params {
	queryClient: QueryClient;
	board_id: string | undefined;
	note_id: string;
	favorite_id: string | undefined;
}

export interface IUpdateNoteFavoriteCache {
	(params: Params): void;
}
