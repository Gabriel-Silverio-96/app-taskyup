import { useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContextText } from "../Context";
import useDialogText from "../hooks/useDialogText";
import fetchCreateText from "../service";
import CardTextView from "./CardTextView";
import fetchTexts from "./service";
import { IFetchTexts } from "./types/CardText.component";
import { IFetchCreateText } from "../types";
import mountBody from "./utils/mount-body";

const CardText: React.FC = () => {
	const { seTitleText } = useContextText();
	const { palette } = useTheme();
	const { board_id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { openDialogDeleteSingleText } = useDialogText();

	const queryKey = ["texts", { variables: board_id }];
	const queryFn = () => fetchTexts(board_id);
	const onSuccessQuery = ({ title }: IFetchTexts) => seTitleText(title);
	const optionsQuery = {onSuccess: onSuccessQuery};
	
	const { data, isFetching } = useQuery(queryKey, queryFn, optionsQuery);
	
	useEffect(() => {data && seTitleText(data.title);}, [board_id]);

	const mutationFn = async () => {
		const body = mountBody();
		const { data } = await fetchCreateText(board_id, body);

		return data;
	};

	const onSuccessMutation = ({ text_id }: IFetchCreateText) => {
		queryClient.invalidateQueries(["texts"]);

		const redirectTo = `/text/edit?text_id=${text_id}&board_id=${board_id}`;
		navigate(redirectTo);	
	};

	const optionsMutation = { onSuccess: onSuccessMutation };
	const { mutate: createText, isLoading: isCreatingText } = useMutation(mutationFn, optionsMutation);

	return (
		<CardTextView
			{...{
				palette,
				data,
				isFetching,
				createText,
				isCreatingText,
				board_id,
				openDialogDeleteSingleText,
			}}
		/>
	);
};

export default memo(CardText);
