import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPatchBoardService } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/services/types";

export const fetchPatchBoardService: IFetchPatchBoardService = async (
	boardID,
	body
) => {
	return await api.patch<IFetchResponseDefault>(
		`board/edit/board_id=${boardID}`,
		body
	);
};
