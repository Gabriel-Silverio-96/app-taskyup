import api from "shared/services/api";
import type { IGetAllTextsResponse } from "modules/texts/Text/services/types";

export const getAllTextsService = async (boardID: string | undefined) => {
	const { data } = await api.get<IGetAllTextsResponse>(
		`/text/list/board_id=${boardID}`
	);
	return data;
};
