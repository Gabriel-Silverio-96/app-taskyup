import api from "shared/services/api";
import { IFetchGetBoardResponse } from "../types/CardBoard.component";

const fetchGetBoardService = async () => {
	const { data } = await api.get<IFetchGetBoardResponse[]>("/board");
	return data;
};

export { fetchGetBoardService };
