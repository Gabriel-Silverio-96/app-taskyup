import api from "shared/services/api";
import { IFetchGetAllTextsResponse } from "../types";

const fetchGetAllTextsService = async (board_id: string | undefined) => {
	const { data } = await api.get<IFetchGetAllTextsResponse>(
		`/text/list/board_id=${board_id}`
	);
	return data;
};

export { fetchGetAllTextsService };
