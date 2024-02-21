export const updateNoteData = ({ oldData, note_id, favorite_id }: any) => {
	const filter = oldData.list_notes.map((note: any) => {
		if (note.note_id === note_id) {
			return {
				...note,
				favorite_id,
				favorite: !note.favorite,
			};
		}
		return note;
	});

	return { ...oldData, list_notes: filter };
};
