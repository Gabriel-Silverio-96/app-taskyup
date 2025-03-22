import api from "shared/services/api";
import {
	IPostCreateNoteResponse,
	IPostCreateNoteService,
} from "modules/notes/Note/components/HeaderNote/services/types";

export const postCreateNoteService: IPostCreateNoteService = async ({
	board_id,
	body,
}) => {
	const { data } = await api.post<IPostCreateNoteResponse>(
		`notes/create/board_id=${board_id}`,
		body
	);
	return data;
};
