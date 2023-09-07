import api from "shared/services/api";
import { IFetchPostCreateNoteResponse, IFetchPostCreateNoteService } from "../types";

const fetchPostCreateNoteService = async (data: IFetchPostCreateNoteService) => {
	const { board_id, payload } = data;
	const response = await api.post<IFetchPostCreateNoteResponse>(`notes/create/board_id=${board_id}`, payload);
	
	return response.data;
};

export { fetchPostCreateNoteService };
