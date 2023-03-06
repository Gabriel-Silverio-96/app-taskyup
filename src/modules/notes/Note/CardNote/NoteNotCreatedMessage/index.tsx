import { Grid, Typography } from "@mui/material";
import React, { memo } from "react";

const NoteNotCreatedMessage: React.FC = () => {
	const thereNotes = false;

	return (
		<>
			{thereNotes && (
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
