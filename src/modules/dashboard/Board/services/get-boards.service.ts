import api from "shared/services/api";
import { IGetBoardsResponse } from "modules/dashboard/Board/services/types";

export const getBoardsService = async () => {
	const { data } = await api.get<IGetBoardsResponse[]>("/board");
	return data;
};
