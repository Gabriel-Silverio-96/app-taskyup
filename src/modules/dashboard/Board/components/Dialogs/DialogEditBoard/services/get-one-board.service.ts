import api from "shared/services/api";
import type { IGetOneBoardResponse } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services/types";

export const getOneBoardService = async (boardID: string | undefined) => {
	const { data } = await api.get<IGetOneBoardResponse>(
		`/board/board_id=${boardID}`
	);
	return data;
};
