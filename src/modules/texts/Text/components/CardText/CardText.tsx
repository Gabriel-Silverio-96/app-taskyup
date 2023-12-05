import { Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CardHeader from "modules/texts/Text/components/CardText/components/CardHeader";
import { mountBodyText } from "modules/texts/Text/utils/mount-body-text";
import React, { memo } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "shared/components/Loading";
import { ICON_SIZE } from "shared/constants";
import { TEXT_QUERY_KEY } from "shared/services/constants/texts";
import { createURLQueryParams } from "shared/util/createURLQueryParams";
import CardContent from "modules/texts/Text/components/CardText/components/CardContent";
import {
	CardContainer,
	CardCreateText,
	CardTextContainer,
} from "modules/texts/Text/components/CardText/style";
import { ICardText } from "modules/texts/Text/components/CardText/types";
import { fetchPostTextService } from "modules/texts/Text/services";
import { IFetchPostTextResponse } from "modules/texts/Text/services/types";

const CardText: React.FC<ICardText> = ({ data }) => {
	const { board_id } = useParams();
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const mutationFn = async () => {
		const body = mountBodyText();
		const { data } = await fetchPostTextService({ board_id, body });

		return data;
	};

	const onSuccess = async ({ text_id }: IFetchPostTextResponse) => {
		const redirectToTextEdit = createURLQueryParams("/text/edit", {
			text_id,
			board_id,
		});
		navigate(redirectToTextEdit);

		await queryClient.invalidateQueries([
			TEXT_QUERY_KEY.FETCH_GET_ALL_TEXTS,
		]);
	};

	const { mutate, isLoading } = useMutation(mutationFn, { onSuccess });

	return (
		<CardContainer>
			<Loading isLoading={isLoading} backdrop message="Creating text" />
			<div>
				<CardCreateText onClick={() => mutate()} role="button">
					<FiPlus size={ICON_SIZE.EXTRA_LARGE} />
					<Typography variant="caption">Create</Typography>
				</CardCreateText>
			</div>
			{data &&
				data.texts.map(({ title_text, text_id, created_at }) => {
					return (
						<div key={text_id}>
							<CardTextContainer>
								<CardHeader {...{ text_id, board_id }} />
								<CardContent {...{ title_text, created_at }} />
							</CardTextContainer>
						</div>
					);
				})}
		</CardContainer>
	);
};

export default memo(CardText);
