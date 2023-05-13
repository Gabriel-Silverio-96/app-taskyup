import { Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import { IEmptyBoard } from "./types/EmptyBoard.component";

const EmptyBoard: React.FC<IEmptyBoard> = ({ title, message, show }) => {
	return (
		<>
			{show && (
				<Grid item md={12} sx={{ mt: 1 }}>
					<Typography variant="body2" fontWeight={800}>
						{title}
					</Typography>
					<Typography variant="caption" color="GrayText">
						{message}                        
					</Typography>
				</Grid>
			)}
		</>
	);
};

export default memo(EmptyBoard);