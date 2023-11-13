import api from "shared/services/api";
import { IFetchGetBoardsResponse } from "modules/dashboard/Board/components/CardBoard/services/types";

export const fetchGetBoardsService = async () => {
	const { data } = await api.get<IFetchGetBoardsResponse[]>("/board");
	return data;
};
