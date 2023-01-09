import { IFetchSingleBoard } from "shared/common/types/Fetch";
import api from "shared/services/api";

const fetchSingleBoard = async (boardID: string) => {
	const { data } = await api.get<IFetchSingleBoard>(`/board/board_id=${boardID}`);
	return data;
};

export { fetchSingleBoard };