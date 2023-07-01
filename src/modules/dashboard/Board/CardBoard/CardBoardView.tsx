import { Card, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import Loading from "shared/components/Loading";
import { linkPathBoard } from "./constant";
import { CardBoardContainer, CardContent, CardHeader, CardIcon, Menu } from "./style";
import { ICardBoardView, ITypeBoard } from "./types/CardBoard.types";
import EmptyBoard from "shared/components/EmptyBoard/EmptyBoard";

const CardBoardView: React.FC<ICardBoardView> = props => {
	const { 
		board,
		boardIcon,
		isFetching,
		palette,
		openMenu,
		closeMenu,
		anchorEl,
		isOpenMenu,
		handleBoardID,
		openDialogEditBoard,
		openDialogDeleteSingleBoard
	 } = props;
			
	return (
		<Grid container spacing={2}>
			<Loading isLoading={isFetching} backdrop />
			<EmptyBoard 
				show={board?.length === 0} 
				title="You have not created any board" 
				message="Create a board 😊" 
			/>

			{board &&
				board.map(({ title, type_board, board_id, background_image }) => {													
					const icon = boardIcon[type_board as keyof ITypeBoard];					
					const pathBoard = linkPathBoard[type_board as keyof ITypeBoard<string>];
					const linkBoard = `/${pathBoard}/${board_id}`;

					return (
						<Grid item xl={2} md={3} xs={12} key={board_id}>
							<CardBoardContainer backgroundimage={background_image}>
								<Card sx={{ height: 120 }}>
									<CardContent>
										<CardHeader>
											<Link to={linkBoard}>
												<CardIcon>
													{icon}
													<Typography color="text.secondary" gutterBottom sx={{ fontSize: 12 }}>
														{type_board}
													</Typography>
												</CardIcon>
											</Link>
											<IconButton sx={ { p: 0 } } 
												disabled={isFetching}
												onClick={(event: MouseEvent<HTMLButtonElement>) => {
													handleBoardID(board_id);
													openMenu(event);
												}}
												data-testid="button-card-board-options"
											>
												<BsThreeDots />
											</IconButton>
											<Menu 
												anchorEl={anchorEl}
												open={isOpenMenu}
												onClose={closeMenu}											
												autoFocus={false}
												transitionDuration={{ appear: 0, enter: 0, exit: 0 }}
												anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
												transformOrigin={{ vertical: "top", horizontal: "right" }}
											>
												<MenuItem onClick={() => openDialogEditBoard(closeMenu)}>
													<FiEdit /> Edit
												</MenuItem>
												<MenuItem onClick={() => openDialogDeleteSingleBoard(closeMenu)} 
													sx={ { color: palette.error.main } }
												>
													<AiOutlineDelete /> Delete
												</MenuItem>
											</Menu>
										</CardHeader>
										<Link to={linkBoard}>
											<Typography
												variant="h6"												
												fontWeight={800}
												fontSize={16}
												data-testid="card-board-title"
											>
												{title}
											</Typography>
										</Link>
									</CardContent>
								</Card>
							</CardBoardContainer>
						</Grid>
					);
				})}			
		</Grid>
	);
};

export default CardBoardView;
