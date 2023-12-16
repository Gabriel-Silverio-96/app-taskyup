import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostCreateBoardService } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/service/types";

export const fetchPostCreateBoardService: IFetchPostCreateBoardService =
	async ({ body }) => {
		const { data } = await api.post<IFetchResponseDefault>(
			"board/create",
			body
		);

		return data;
	};
