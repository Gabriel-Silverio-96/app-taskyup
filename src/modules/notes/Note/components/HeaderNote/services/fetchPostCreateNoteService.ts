import api from "shared/services/api";
import {
	IFetchPostCreateNoteResponse,
	IFetchPostCreateNoteService,
} from "modules/notes/Note/components/HeaderNote/services/types";

export const fetchPostCreateNoteService: IFetchPostCreateNoteService = async ({
	board_id,
	body,
}) => {
	const { data } = await api.post<IFetchPostCreateNoteResponse>(
		`notes/create/board_id=${board_id}`,
		body
	);
	return data;
};
