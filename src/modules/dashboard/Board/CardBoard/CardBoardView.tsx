import { Card, CardContent, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IFetchBoard } from "shared/common/hook/useFetchBoard/types/UseFetchBoard.types";
import Loading from "shared/components/Loading";
import { CardBoardContainer, CardHeader, CardIcon, Menu } from "./style";

const CardBoardView: React.FC<any> = props => {
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
			{board && !board.length && (
				<Grid item md={12} sx={{ mt: 1 }}>
					<Typography variant="body2" fontWeight={800}>You have not created any board</Typography>
					<Typography variant="caption" color="GrayText">Create a board 😊</Typography>
				</Grid>
			)}
			{board &&
				board.map((boardItem: IFetchBoard) => (
					<Grid item xl={2} md={3} xs={12} key={boardItem.board_id}>
						<CardBoardContainer>
							<Card sx={{ height: 120 }}>
								<CardContent>
									<CardHeader>
										<Link to={`/notes/${boardItem.board_id}`}>
											<CardIcon>
												{boardIcon[boardItem.type_board]}
												<Typography color="text.secondary" gutterBottom sx={{ fontSize: 12 }}>
													{boardItem.type_board}
												</Typography>
											</CardIcon>
										</Link>
										<IconButton sx={ { p: 0 } } 
											disabled={isFetching}
											onClick={(event: MouseEvent<HTMLButtonElement>) => {
												handleBoardID(boardItem.board_id);
												openMenu(event);
											}}>
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
											<MenuItem onClick={() => openDialogEditBoard(closeMenu)}>Edit</MenuItem>
											<MenuItem onClick={() => openDialogDeleteSingleBoard(closeMenu)} 
												sx={ { color: palette.error.main } }
											>
												Delete
											</MenuItem>
										</Menu>
									</CardHeader>
									<Link to={`/notes/${boardItem.board_id}`}>
										<Typography
											variant="h6"
											component="div"
											fontWeight={800}
											fontSize={16}
										>
											{
												boardItem.title.length > 30 
													? `${boardItem.title.substring(0, 30).trim()}...`
													: boardItem.title
											}
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
