import { useTheme } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { memo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardTextView from "./CardTextView";
import { fetchGetAllTextsService } from "./service";
import { mountBodyText } from "./utils/mount-body-text";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import { IFetchGetAllTextsResponse } from "./types";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import { useDialogText } from "modules/texts/Text/shared/hooks/useDialogText";
import { useContextText } from "modules/texts/Text/Context";
import { fetchPostTextService } from "modules/texts/Text/service";
import { IFetchPostTextResponse } from "modules/texts/Text/types";

const CardText: React.FC = () => {
	const { palette } = useTheme();
	const { setCountText } = useContextText();
	const { board_id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { openDialogDeleteSingleText } = useDialogText();

	const queryKey = [
		TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
		{ variables: board_id },
	];
	const queryFn = () => fetchGetAllTextsService(board_id);

	const onSuccessQuery = ({ count }: IFetchGetAllTextsResponse) =>
		setCountText(count);

	const optiosQuery = { onSuccess: onSuccessQuery };
	const { data, isFetching } = useQuery<IFetchGetAllTextsResponse>(
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

		await queryClient.invalidateQueries([
			TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
		]);
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