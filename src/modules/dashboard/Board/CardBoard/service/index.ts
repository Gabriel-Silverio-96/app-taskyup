import api from "shared/services/api";
import { IFetchGetBoard } from "../types/CardBoard.component";

const fetchGetBoard = async () => {
	const { data } = await api.get<IFetchGetBoard[]>("/board");
	return data;
};

export default fetchGetBoard;
