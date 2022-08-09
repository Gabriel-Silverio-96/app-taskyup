import { Card, CardContent, CircularProgress, Fade, Grid, IconButton, MenuItem, Typography } from "@mui/material";
import React, { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { IFetchBoard } from "shared/common/hook/useFetchBoard/types/UseFetchBoard.types";
import { CardBoardContainer, CardHeader, CardIcon, Loading, Menu } from "./style";
import { BsThreeDots } from "react-icons/bs";

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
	 } = props;
			
	return (
		<Grid container spacing={2}>
			<Fade in={isFetching}>
				<Grid item md={12} sx={{paddingTop: "0 !important", height: !isFetching ? 10 : "inherit"}}>
					<Loading>
						<CircularProgress size={15} color="primary"/>
						<Typography variant="caption">Loading</Typography>
					</Loading>
				</Grid>
			</Fade>
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
											anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    										transformOrigin={{ vertical: "top", horizontal: "right" }}
										>
											<MenuItem onClick={closeMenu}>Edit</MenuItem>
											<MenuItem onClick={closeMenu} sx={ { color: palette.error.main } }>
												Delete
											</MenuItem>
										</Menu>
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
