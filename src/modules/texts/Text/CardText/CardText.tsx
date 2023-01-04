import { useTheme } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import CardTextView from "./CardTextView";
import { ONE_HOUR_IN_MILLISECOND } from "./constant";
import { fetchTexts, fetchCreateText } from "./service";

const CardText: React.FC = () => {
	const { palette } = useTheme();
	const { board_id } = useParams();
	const [isCreatingText, setIsCreatingText] = useState(false);
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { data, isFetching: isLoading } = useQuery(["texts", { variables: board_id }], () => fetchTexts(board_id),
		{ cacheTime: ONE_HOUR_IN_MILLISECOND }
	);	

	const createText = async () => {
		try {
			setIsCreatingText(true);
			const { text_id } = await fetchCreateText(board_id);
			queryClient.invalidateQueries(["texts"]);
			
			const redirectTo = `/text/edit/${text_id}`;
			navigate(redirectTo);			
		} catch (error) {
			console.error("CardText", error);			
		} finally {
			setIsCreatingText(false);
		}
	};

	return <CardTextView {...{ palette, data, isLoading, createText, isCreatingText, board_id }} />;
};

export default memo(CardText);
