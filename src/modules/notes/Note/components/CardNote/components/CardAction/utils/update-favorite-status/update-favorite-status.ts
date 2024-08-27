import { IUpdateFavoriteStatus } from "modules/notes/Note/components/CardNote/components/CardAction/utils/update-favorite-status/types";
import { updateNoteFavoriteStatusByNoteId } from "modules/notes/Note/components/CardNote/components/CardAction/utils/update-favorite-status/update-note-favorite-status-by-note-id";

const updateFavoriteStatus: IUpdateFavoriteStatus = ({
	data,
	note_id,
	favorite_id,
}) => {
	if (data) {
		const updatedNoteFavoriteStatusByNoteId =
			updateNoteFavoriteStatusByNoteId({
				data,
				note_id,
				favorite_id,
			});

		return { ...data, list_notes: updatedNoteFavoriteStatusByNoteId };
	}

	return data;
};

export { updateFavoriteStatus };
