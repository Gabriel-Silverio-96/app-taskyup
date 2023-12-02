import { Card, Grid, Typography } from "@mui/material";
import CardBoardAvatar from "modules/dashboard/Board/components/CardBoard/components/CardBoardAvatar";
import {
	CardBoardContainer,
	CardContent,
} from "modules/dashboard/Board/components/CardBoard/style";
import { ICardBoardView } from "modules/dashboard/Board/components/CardBoard/types";
import React from "react";
import { Link } from "react-router-dom";
import DoodleMessage from "shared/components/DoodleMessage";
import Loading from "shared/components/Loading";
import CardHeader from "modules/dashboard/Board/components/CardBoard/components/CardHeader";

const CardBoardView: React.FC<ICardBoardView> = props => {
	const { data, isFetching } = props;

	return (
		<Grid container spacing={2}>
			<Loading isLoading={isFetching} backdrop />
			<DoodleMessage
				show={data?.length === 0}
				title="You have not created any board"
				message="Create a board 😊"
			/>

			{data &&
				data.map(
					({
						title,
						type_board,
						board_id,
						background_image,
						members_board,
					}) => {
						const linkBoard = `/${type_board}/${board_id}`;

						return (
							<Grid item xl={2} md={3} xs={12} key={board_id}>
								{/* Why backgroundimage lower case > Warning: React does not recognize the `backgroundImage` prop on a DOM element. */}
								<CardBoardContainer
									backgroundimage={background_image}>
									<Card sx={{ height: 120 }}>
										<CardContent>
											<CardHeader
												{...{
													type_board,
													board_id,
													isFetching,
												}}
											/>
											<Link to={linkBoard}>
												<Typography
													variant="h6"
													fontWeight={800}
													fontSize={16}
													data-testid="card-board-title">
													{title}
												</Typography>
											</Link>

											<CardBoardAvatar
												membersBoard={members_board}
											/>
										</CardContent>
									</Card>
								</CardBoardContainer>
							</Grid>
						);
					}
				)}
		</Grid>
	);
};

export default CardBoardView;
