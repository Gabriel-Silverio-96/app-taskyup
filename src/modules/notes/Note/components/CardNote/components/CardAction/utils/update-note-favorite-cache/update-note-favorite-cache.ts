import { IFetchGetNotesResponse } from "modules/notes/Note/services/types";
import { NOTE_QUERY_KEY } from "shared/constants";
import { updateFavoriteStatus } from "../update-favorite-status";
import { IUpdateNoteFavoriteCache } from "./types/update-note-favorite-cache.types";

const updateNoteFavoriteCache: IUpdateNoteFavoriteCache = ({
	queryClient,
	board_id,
	note_id,
	favorite_id,
}) => {
	queryClient.setQueryData<IFetchGetNotesResponse>(
		[NOTE_QUERY_KEY.FETCH_GET_NOTES, { variable: board_id }],
		data =>
			updateFavoriteStatus({
				data,
				note_id,
				favorite_id,
			})
	);
};

export { updateNoteFavoriteCache };
