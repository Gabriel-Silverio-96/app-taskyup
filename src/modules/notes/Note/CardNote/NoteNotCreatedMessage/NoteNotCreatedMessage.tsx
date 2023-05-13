import { Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import { INoteNotCreatedMessage } from "./types/NoteNotCreatedMessage.component";

const NoteNotCreatedMessage: React.FC<INoteNotCreatedMessage> = ({ count }) => {
	const hasNotes = count === 0;

	return (
		<>
			{hasNotes && (
				<Grid item md={12} sx={{ mt: 1 }}>
					<Typography variant="body2" fontWeight={800}>
						You have not created any notes
					</Typography>
					<Typography variant="caption" color="GrayText">
						Create a note 😊
					</Typography>
				</Grid>
			)}
		</>
	);
};

export default memo(NoteNotCreatedMessage);