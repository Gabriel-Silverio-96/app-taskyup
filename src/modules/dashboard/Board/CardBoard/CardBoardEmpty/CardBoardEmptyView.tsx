import { Grid, Typography } from "@mui/material";
import React from "react";
import { ICardBoardEmpty } from "./types/CardBoardEmpty.component";

const CardBoardEmptyView: React.FC<ICardBoardEmpty> = ({ board }) => {
	const isEmpty = board && !board.length;

	return (
		<>
			{isEmpty && (
				<Grid item md={12} sx={{ mt: 1 }}>
					<Typography variant="body2" fontWeight={800}>
						You have not created any board
					</Typography>
					<Typography variant="caption" color="GrayText">
						Create a board 😊
					</Typography>
				</Grid>
			)}
		</>
	);
};

export default CardBoardEmptyView;
