import api from "shared/services/api";

const fetchGetOneNote = async (noteId: string) => {
	const { data } = await api.get(`notes/note_id=${noteId}`);
	return data;
};

export { fetchGetOneNote };