import { Typography } from "@mui/material";
import CardHeader from "modules/texts/Text/components/CardText/components/CardHeader";
import { ICardTextView } from "modules/texts/Text/components/CardText/types";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Loading from "shared/components/Loading";
import { ICON_SIZE } from "shared/constants";
import dateFormat from "shared/util/dateFormat";
import { CardContainer, CardContent, CardCreateText, CardText } from "./style";

const CardTextView: React.FC<ICardTextView> = props => {
	const {
		data,
		isFetching,
		handleClickCreateText,
		isCreatingText,
		board_id,
	} = props;

	if (isFetching) {
		return <Loading isLoading backdrop />;
	}

	return (
		<CardContainer>
			<Loading
				isLoading={isCreatingText}
				backdrop
				message="Creating text"
			/>
			<div>
				<CardCreateText onClick={handleClickCreateText} role="button">
					<FiPlus size={ICON_SIZE.EXTRA_LARGE} />
					<Typography variant="caption">Create</Typography>
				</CardCreateText>
			</div>
			{data &&
				data.texts.map(({ title_text, text_id, created_at }) => {
					const createdAt = dateFormat(created_at);
					return (
						<div key={text_id}>
							<CardText>
								<CardHeader {...{ text_id, board_id }} />
								<CardContent>
									<Typography
										variant="body1"
										fontWeight={800}>
										{title_text}
									</Typography>
									<Typography
										variant="caption"
										color="GrayText">
										Created at {createdAt}
									</Typography>
								</CardContent>
							</CardText>
						</div>
					);
				})}
		</CardContainer>
	);
};

export default CardTextView;
