import React from "react";
import HeaderNoteEdit from "./components/HeaderNoteEdit/FormNoteEdit";
import { Grid } from "@mui/material";

const NoteEditView: React.FC = () => {
	return (
		<Grid container maxWidth={800} margin="auto">
			<Grid item xs={12}>
				<Grid container justifyContent="center">
					<Grid item md={12}>
						<HeaderNoteEdit />	
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default NoteEditView;
