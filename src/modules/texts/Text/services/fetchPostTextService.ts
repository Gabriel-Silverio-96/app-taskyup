import api from "shared/services/api";
import {
	IFetchPostTextResponse,
	IFetchPostTextService,
} from "modules/texts/Text/services/types";

export const fetchPostTextService: IFetchPostTextService = async ({
	board_id,
	body,
}) => {
	return await api.post<IFetchPostTextResponse>(
		`/text/board_id=${board_id}`,
		body
	);
};
