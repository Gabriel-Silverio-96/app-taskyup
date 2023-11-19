import api from "shared/services/api";
import { IFetchGetOneNoteResponse } from "../types";

export const fetchGetOneNoteService = async (noteID: string | null) => {
	const { data } = await api.get<IFetchGetOneNoteResponse>(
		`notes/note_id=${noteID}`
	);
	return data;
};
