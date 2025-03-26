import api from "shared/services/api";
import {
	IPostTextResponse,
	IPostTextService,
} from "modules/texts/Text/services/types";

export const postTextService: IPostTextService = async ({ board_id, body }) => {
	return await api.post<IPostTextResponse>(
		`/text/board_id=${board_id}`,
		body
	);
};
