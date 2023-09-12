import { useQuery } from "@tanstack/react-query";
import { IFetchGetOneBoardResponse } from "shared/common/types/Fetch";
import api from "shared/services/api";

const useFetchGetOneBoard = (boardID: string | undefined) => {
	const fetchGetSingleBoard = async () => {
		const { data } = await api.get<IFetchGetOneBoardResponse>(
			`/board/board_id=${boardID}`
		);
		return data;
	};

	const queryKey = ["get_single_board", { variable: boardID }];
	const { isError, data, isFetching } = useQuery(
		queryKey,
		fetchGetSingleBoard
	);

	return { data, isError, isFetching };
};

export default useFetchGetOneBoard;
