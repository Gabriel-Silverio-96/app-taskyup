import api from "shared/services/api";

const fetchGetOneNote = async (noteId: string | null) => {
	const { data } = await api.get(`notes/note_id=${noteId}`);
	return data;
};

const fetchPutNote = async (data: any) => {
	const { payload, note_id, board_id } = data;
	const params = { params: { note_id, board_id } };

	await api.put("/notes/edit", payload, params);	
};


export { fetchGetOneNote, fetchPutNote };