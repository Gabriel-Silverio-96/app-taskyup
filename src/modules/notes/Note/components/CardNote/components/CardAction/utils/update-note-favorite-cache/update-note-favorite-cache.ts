import type { IGetNotesResponse } from "modules/notes/Note/services/types";
import { NOTE_QUERY_KEY } from "shared/constants";
import { updateFavoriteStatus } from "modules/notes/Note/components/CardNote/components/CardAction/utils";
import type { IUpdateNoteFavoriteCache } from "modules/notes/Note/components/CardNote/components/CardAction/utils/update-note-favorite-cache/types";

const updateNoteFavoriteCache: IUpdateNoteFavoriteCache = ({
	queryClient,
	board_id,
	note_id,
	favorite_id,
}) => {
	queryClient.setQueryData<IGetNotesResponse>(
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
