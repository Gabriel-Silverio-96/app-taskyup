import api from "shared/services/api";
import { IFetchGetBoardResponse } from "../types/CardBoard.types";

const fetchGetBoardService = async () => {
	const { data } = await api.get<IFetchGetBoardResponse[]>("/board");
	return data;
};

export { fetchGetBoardService };
