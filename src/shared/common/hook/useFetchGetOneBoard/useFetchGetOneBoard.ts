import { useQuery } from "@tanstack/react-query";
import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";
import api from "shared/services/api";

export const HOOK_FETCH_BOARD_QUERY_KEY = {
	FETCH_GET_ONE_BOARD: "FETCH_GET_ONE_BOARD",
};

const useFetchGetOneBoard = (boardID: string | undefined) => {
	const fetchGetSingleBoard = async () => {
		const { data } = await api.get<IFetchGetOneBoardResponse>(
			`/board/board_id=${boardID}`
		);
		return data;
	};

	const queryKey = [
		HOOK_FETCH_BOARD_QUERY_KEY.FETCH_GET_ONE_BOARD,
		{ variable: boardID },
	];
	const { isError, data, isFetching } = useQuery(
		queryKey,
		fetchGetSingleBoard
	);

	return { data, isError, isFetching };
};

export default useFetchGetOneBoard;
