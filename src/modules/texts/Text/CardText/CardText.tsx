import { useTheme } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { useContextText } from "../Context";
import useDialogText from "../hooks/useDialogText";
import CardTextView from "./CardTextView";
import { ONE_HOUR_IN_MILLISECOND } from "./constant";
import { fetchTexts, fetchCreateText } from "./service";

const CardText: React.FC = () => {
	const { seTitleText } = useContextText();
	const { palette } = useTheme();
	const { board_id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { openDialogDeleteSingleText } = useDialogText();

	const [ isCreatingText, setIsCreatingText ] = useState(false);

	const { data, isFetching: isLoading } = useQuery(["texts", { variables: board_id }], () => fetchTexts(board_id),
		{ cacheTime: ONE_HOUR_IN_MILLISECOND, onSuccess: ({ title }) => seTitleText(title) }
	);	
	
	useEffect(() => {data && seTitleText(data.title);}, [board_id]);

	const createText = async () => {
		try {
			setIsCreatingText(true);
			const { text_id } = await fetchCreateText(board_id);
			queryClient.invalidateQueries(["texts"]);
			
			const redirectTo = `/text/edit?text_id=${text_id}&board_id=${board_id}`;
			navigate(redirectTo);			
		} catch (error) {
			console.error("CardText", error);			
		} finally {
			setIsCreatingText(false);
		}
	};

	return (
		<CardTextView
			{...{
				palette,
				data,
				isLoading,
				createText,
				isCreatingText,
				board_id,
				openDialogDeleteSingleText,
			}}
		/>
	);
};

export default memo(CardText);
