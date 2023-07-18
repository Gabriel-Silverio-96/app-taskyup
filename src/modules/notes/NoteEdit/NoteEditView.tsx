import React from "react";
import FormNoteEdit from "./components/FormNoteEdit";
import { Grid } from "@mui/material";

const NoteEditView: React.FC = () => {
	return (
		<Grid container maxWidth={800} margin="auto">
			<Grid item xs={12}>
				<Grid container justifyContent="center">
					<Grid item md={12}>
						<FormNoteEdit />	
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default NoteEditView;
