import { Grid, Typography } from "@mui/material";
import React, { memo } from "react";
import { IListNotes } from "../types/CardNote.component";

const NoteNotCreatedMessage: React.FC<IListNotes> = ({ notes }) => {
	const thereNotes = notes && notes.list_notes?.length === 0;

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