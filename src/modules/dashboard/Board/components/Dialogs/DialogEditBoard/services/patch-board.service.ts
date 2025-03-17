import type { IPatchBoardService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services/types";
import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";

export const patchBoardService: IPatchBoardService = async (boardID, body) => {
	return await api.patch<IFetchDefaultResponse>(
		`board/edit/board_id=${boardID}`,
		body
	);
};
