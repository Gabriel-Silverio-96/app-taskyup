import api from "shared/services/api";
import { IFetchGetAllTextsResponse } from "modules/texts/Text/services/types";

export const fetchGetAllTextsService = async (boardID: string | undefined) => {
	const { data } = await api.get<IFetchGetAllTextsResponse>(
		`/text/list/board_id=${boardID}`
	);
	return data;
};
