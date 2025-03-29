import type { IFetchDefaultResponse } from "shared/common/types";
import api from "shared/services/api";
import type { IPostBoardService } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/services/types";

export const postBoardService: IPostBoardService = async ({ body }) => {
	const { data } = await api.post<IFetchDefaultResponse>(
		"board/create",
		body
	);

	return data;
};
