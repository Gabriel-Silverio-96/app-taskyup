import { useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDialogText from "../hooks/useDialogText";
import fetchPostTextService from "../service";
import { IFetchPostTextResponse } from "../types";
import CardTextView from "./CardTextView";
import { fetchGetAllTextService } from "./service";
import { mountBodyText } from "./utils/mount-body-text";
import { useContextText } from "../Context";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { IFetchGetAllTextResponse } from "./types";

const CardText: React.FC = () => {
	const { palette } = useTheme();
	const { setCountText } = useContextText();
	const { board_id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { openDialogDeleteSingleText } = useDialogText();

	const queryKey = ["texts", { variables: board_id }];
	const queryFn = () => fetchGetAllTextService(board_id);

	const onSuccessQuery = ({ count }: IFetchGetAllTextResponse) =>
		setCountText(count);

	const optiosQuery = { onSuccess: onSuccessQuery };
	const { data, isFetching } = useQuery<IFetchGetAllTextResponse>(
		queryKey,
		queryFn,
		optiosQuery
	);

	useEffect(() => {
		data && setCountText(data.count);
	}, [board_id]);

	const mutationFn = async () => {
		const body = mountBodyText();
		const { data } = await fetchPostTextService(board_id, body);

		return data;
	};

	const onSuccessMutation = async ({ text_id }: IFetchPostTextResponse) => {
		const redirectTo = createURLQueryParams("/text/edit", {
			text_id,
			board_id,
		});
		navigate(redirectTo);

		await queryClient.invalidateQueries(["texts"]);
	};

	const optionsMutation = { onSuccess: onSuccessMutation };
	const { mutate: handleClickCreateText, isLoading: isCreatingText } =
		useMutation(mutationFn, optionsMutation);

	return (
		<CardTextView
			{...{
				palette,
				data,
				isFetching,
				handleClickCreateText,
				isCreatingText,
				board_id,
				openDialogDeleteSingleText,
			}}
		/>
	);
};

export default memo(CardText);
