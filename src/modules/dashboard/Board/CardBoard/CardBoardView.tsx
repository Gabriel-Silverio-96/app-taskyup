import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IFetchBoard } from "shared/common/hook/useFetchBoard/types/UseFetchBoard.types";
import { CardBoardContainer, CardHeader, CardIcon } from "./style";
import { BsThreeDots } from "react-icons/bs";

const CardBoardView: React.FC<any> = props => {
	const { board, boardIcon } = props;
	return (
		<Grid container spacing={2}>
			{board &&
				board.map((boardItem: IFetchBoard) => (
					<Grid item xl={2} md={3} xs={12} key={boardItem.board_id}>
						<CardBoardContainer>
							<Card sx={{ height: 120 }}>
								<CardContent>
									<CardHeader>
										<CardIcon>
											{boardIcon[boardItem.type_board]}
											<Typography color="text.secondary"gutterBottom sx={{ fontSize: 12 }}>
												{boardItem.type_board}
											</Typography>
										</CardIcon>
										<IconButton sx={{p: 0}}>
											<BsThreeDots />
										</IconButton>
									</CardHeader>
									<Link to={`/notes/${boardItem.board_id}`}>
										<Typography
											variant="h6"
											component="div"
											fontWeight={800}>
											{boardItem.title}
										</Typography>
									</Link>
								</CardContent>
							</Card>
						</CardBoardContainer>
					</Grid>
				))}
		</Grid>
	);
};

export default CardBoardView;
