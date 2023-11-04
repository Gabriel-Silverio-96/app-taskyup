import { IconButton, Typography } from "@mui/material";
import React from "react";
import { FiEye, FiPlus, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import Loading from "shared/components/Loading";
import dateFormat from "shared/util/dateFormat";
import {
	CardContainer,
	CardContent,
	CardCreateText,
	CardHeader,
	CardText,
} from "./style";
import { ICardTextView, IText } from "./types";
import { createURLQueryParams } from "shared/util/createURLQueryParams";

const CardTextView: React.FC<ICardTextView> = props => {
	const {
		palette,
		data,
		isFetching,
		handleClickCreateText,
		isCreatingText,
		board_id,
		openDialogDeleteOneText,
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
					<FiPlus size={40} />
					<Typography variant="caption">Create</Typography>
				</CardCreateText>
			</div>
			{data &&
				data.texts.map(({ title_text, text_id, created_at }: IText) => {
					const createdAt = dateFormat(created_at);
					const linkTo = createURLQueryParams("/text/edit", {
						text_id,
						board_id,
					});

					return (
						<div key={text_id}>
							<CardText>
								<CardHeader>
									<IconButton
										onClick={() =>
											openDialogDeleteOneText(text_id)
										}>
										<FiTrash
											color={palette.error.main}
											size={18}
										/>
									</IconButton>
									<Link to={linkTo}>
										<IconButton>
											<FiEye size={18} />
										</IconButton>
									</Link>
								</CardHeader>
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
