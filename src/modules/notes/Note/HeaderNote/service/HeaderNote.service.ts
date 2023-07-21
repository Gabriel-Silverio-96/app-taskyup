import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchPostCreateNoteService = async (data: any) => {
	const { board_id, payload } = data;
	const response = await api.post<IFetchResponseDefault>(`notes/create/board_id=${board_id}`, payload);
	return response;
};

export { fetchPostCreateNoteService };