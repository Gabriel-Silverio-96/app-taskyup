import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "shared/services/api";
import { IFetchPostCreateBoardService } from "../types/DialogNewBoard.component";

const fetchPostCreateBoardService = async (
	data: IFetchPostCreateBoardService
) => {
	const response = await api.post<IFetchResponseDefault>(
		"board/create",
		data
	);
	return response.data;
};

export { fetchPostCreateBoardService };
