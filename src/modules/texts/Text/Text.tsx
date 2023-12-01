import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import TextView from "modules/texts/Text/TextView";
import { fetchGetAllTextsService } from "modules/texts/Text/services";

const Text: React.FC = () => {
	const { board_id } = useParams();

	const queryKey = [
		TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
		{ variables: board_id },
	];
	const queryFn = () => fetchGetAllTextsService(board_id);

	const { data, isFetching } = useQuery(queryKey, queryFn);

	return <TextView {...{ data, isFetching }} />;
};

export default Text;
