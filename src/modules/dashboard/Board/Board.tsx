import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";
import BoardView from "modules/dashboard/Board/BoardView";
import { fetchGetBoardsService } from "modules/dashboard/Board/services";

const Board: React.FC = () => {
	const { data, isFetching } = useQuery(
		[BOARD_QUERY_KEY.FETCH_GET_BOARDS],
		fetchGetBoardsService
	);

	const isShowDoodleMessage = data?.length === 0;

	return <BoardView {...{ data, isFetching, isShowDoodleMessage }} />;
};

export default Board;
