import { useQuery } from "@tanstack/react-query";
import CardBoardView from "modules/dashboard/Board/components/CardBoard/CardBoardView";
import { fetchGetBoardsService } from "modules/dashboard/Board/components/CardBoard/services";
import React, { memo } from "react";
import { BOARD_QUERY_KEY } from "shared/services/constants/dashboard";

const CardBoard: React.FC = () => {
	const { data, isFetching } = useQuery(
		[BOARD_QUERY_KEY.FETCH_GET_BOARDS],
		fetchGetBoardsService
	);

	return (
		<CardBoardView
			{...{
				data,
				isFetching,
			}}
		/>
	);
};

export default memo(CardBoard);
