import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostBoardService } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/services/types";

export const fetchPostBoardService: IFetchPostBoardService = async ({
	body,
}) => {
	const { data } = await api.post<IFetchResponseDefault>(
		"board/create",
		body
	);

	return data;
};
