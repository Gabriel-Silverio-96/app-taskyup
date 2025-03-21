import type { INote } from "modules/notes/Note/services/types";
import type { IUpdateFavoriteStatus } from "modules/notes/Note/components/CardNote/components/CardAction/utils/update-favorite-status/types";

const updateNoteFavoriteStatusByNoteId: IUpdateFavoriteStatus = ({
	data,
	note_id,
	favorite_id,
}) =>
	data?.list_notes?.map((note: INote) => {
		if (note.note_id === note_id) {
			return {
				...note,
				favorite: !note.favorite,
				favorite_id,
			};
		}

		return note;
	});

export { updateNoteFavoriteStatusByNoteId };
