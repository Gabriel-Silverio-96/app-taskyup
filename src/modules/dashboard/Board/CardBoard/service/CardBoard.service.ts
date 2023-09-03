import api from "shared/services/api";
import { IFetchGetBoardsResponse } from "../types/CardBoard.types";

const fetchGetBoardsService = async () => {
	const { data } = await api.get<IFetchGetBoardsResponse[]>("/board");
	return data;
};

export { fetchGetBoardsService };
