import api from "shared/services/api";
import { IFetchBoard } from "../types/CardBoard.component";

const fetchGetBoardService = async () => {
	const { data } = await api.get<IFetchBoard[]>("/board");
	return data;
};

export { fetchGetBoardService };
