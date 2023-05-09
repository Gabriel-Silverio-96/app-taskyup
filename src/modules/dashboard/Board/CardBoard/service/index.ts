import { IFetchBoard } from "shared/common/hook/useFetchBoard/types/UseFetchBoard.types";
import api from "shared/services/api";

const fetchBoard = async () => {
	const { data } = await api.get<IFetchBoard[]>("/board");
	return data;
};

export default fetchBoard;
