import { Card, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import EmptyBoard from "shared/components/EmptyBoard/EmptyBoard";
import Loading from "shared/components/Loading";
import CardBoardAvatar from "./components/CardBoardAvatar/CardBoardAvatar";
import {
	CardBoardContainer,
	CardContent,
	CardHeader,
	CardIcon,
	Menu,
} from "./style";
import { ICardBoardView } from "./types/CardBoard.types";
import { selectBoardIcon } from "./utils/select-board-icon";
import { ICON_SIZE } from "shared/constants";

const CardBoardView: React.FC<ICardBoardView> = props => {
	const {
		board,
		isFetching,
		palette,
		openMenu,
		closeMenu,
		anchorEl,
		isOpenMenu,
		handleBoardID,
		openDialogEditBoard,
		openDialogDeleteOneBoard,
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
				board.map(
					({
						title,
						type_board,
						board_id,
						background_image,
						members_board,
					}) => {
						const boardIcon = selectBoardIcon(
							type_board,
							palette.secondary.main
						);
						const linkBoard = `/${type_board}/${board_id}`;

						return (
							<Grid item xl={2} md={3} xs={12} key={board_id}>
								{/* Why backgroundimage lower case > Warning: React does not recognize the `backgroundImage` prop on a DOM element. */}
								<CardBoardContainer
									backgroundimage={background_image}>
									<Card sx={{ height: 120 }}>
										<CardContent>
											<CardHeader>
												<Link to={linkBoard}>
													<CardIcon>
														{boardIcon}
														<Typography
															color="text.secondary"
															gutterBottom
															sx={{
																fontSize: 12,
															}}>
															{type_board}
														</Typography>
													</CardIcon>
												</Link>
												<IconButton
													sx={{ p: 0 }}
													disabled={isFetching}
													onClick={(
														event: MouseEvent<HTMLButtonElement>
													) => {
														handleBoardID(board_id);
														openMenu(event);
													}}
													data-testid="button-card-board-options">
													<BsThreeDots
														size={ICON_SIZE.LARGE}
													/>
												</IconButton>
												<Menu
													anchorEl={anchorEl}
													open={isOpenMenu}
													onClose={closeMenu}
													autoFocus={false}
													transitionDuration={{
														appear: 0,
														enter: 0,
														exit: 0,
													}}
													anchorOrigin={{
														vertical: "bottom",
														horizontal: "right",
													}}
													transformOrigin={{
														vertical: "top",
														horizontal: "right",
													}}>
													<MenuItem
														onClick={() =>
															openDialogEditBoard(
																closeMenu
															)
														}>
														<FiEdit
															size={
																ICON_SIZE.SMALL
															}
														/>
														Edit
													</MenuItem>
													<MenuItem
														onClick={() =>
															openDialogDeleteOneBoard(
																closeMenu
															)
														}
														sx={{
															color: palette.error
																.main,
														}}>
														<FiTrash
															size={
																ICON_SIZE.SMALL
															}
														/>
														Delete
													</MenuItem>
												</Menu>
											</CardHeader>
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
