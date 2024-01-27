import { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const fetchDeleteAllTextsService = async (
	boardID: string | undefined
) => {
	const { data } = await api.delete<IFetchDefaultResponse>(
		`/text/delete-all/board_id=${boardID}`
	);
	return data;
};
