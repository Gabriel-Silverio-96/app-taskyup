import api from "shared/services/api";
import { IFetchPostTextResponse, IFetchPostTextService } from "../types";

const fetchPostTextService: IFetchPostTextService = async (board_id, body) => {
	const response = await api.post<IFetchPostTextResponse>(
		`/text/board_id=${board_id}`,
		body
	);
	return response;
};

export default fetchPostTextService;
