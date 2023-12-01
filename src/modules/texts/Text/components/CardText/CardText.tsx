import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContextText } from "modules/texts/Text/Context";
import CardTextView from "modules/texts/Text/components/CardText/CardTextView";
import { fetchGetAllTextsService } from "modules/texts/Text/components/CardText/services";
import { IFetchGetAllTextsResponse } from "modules/texts/Text/components/CardText/services/types";
import { fetchPostTextService } from "modules/texts/Text/service";
import { IFetchPostTextResponse } from "modules/texts/Text/types";
import { mountBodyText } from "modules/texts/Text/utils/mount-body-text";
import React, { memo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import { createURLQueryParams } from "shared/util/createURLQueryParams";

const CardText: React.FC = () => {
	const { setCountText } = useContextText();
	const { board_id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

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
				data,
				isFetching,
				handleClickCreateText,
				isCreatingText,
				board_id,
			}}
		/>
	);
};

export default memo(CardText);
