import { useQuery } from "@tanstack/react-query";
import api from "shared/services/api";
import { IFetchGetSingleBoard } from "./types/useFetchGetSingleBoard.types";

const useFetchGetSingleBoard = (boardID: string | undefined) => {
	const fetchGetSingleBoard = async () => {
		const { data } = await api.get<IFetchGetSingleBoard>(`/board/board_id=${boardID}`);
		return data;
	};

	const queryKey = ["get_single_board", { variable: boardID }];
	const { isError, data, isFetching } = useQuery(queryKey, fetchGetSingleBoard);

	return { data, isError, isFetching };
};

export default useFetchGetSingleBoard;