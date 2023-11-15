import { useQuery } from "@tanstack/react-query";
import { fetchGetOneBoardService } from "shared/common/hook/useFetchGetOneBoard/services";
import { IUseFetchGetOneBoard } from "shared/common/hook/useFetchGetOneBoard/types";

export const HOOK_FETCH_BOARD_QUERY_KEY = {
	FETCH_GET_ONE_BOARD: "FETCH_GET_ONE_BOARD",
};

const useFetchGetOneBoard: IUseFetchGetOneBoard = (boardID, options) => {
	const queryFn = () => fetchGetOneBoardService(boardID);
	const queryKey = [
		HOOK_FETCH_BOARD_QUERY_KEY.FETCH_GET_ONE_BOARD,
		{ variable: boardID },
	];

	return useQuery(queryKey, queryFn, options);
};

export default useFetchGetOneBoard;
