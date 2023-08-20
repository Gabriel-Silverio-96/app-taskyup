import React from "react";
import FormNoteEdit from "./components/FormNoteEdit";
import { Grid } from "@mui/material";
import Loading from "shared/components/Loading/Loading";
import { INoteEditView } from "./types";
import NoteTodo from "./components/NoteTodo/NoteTodo";

const NoteEditView: React.FC<INoteEditView> = props => {
	const {
		register,
		handleSubmit,
		noteEditSubmit,
		errors,
		isFetching,
		isSaving,
		todoData,
		setTodoData,
	} = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<Grid container maxWidth={800} margin="auto">
			<Grid item xs={12}>
				<Grid container justifyContent="center">
					<Grid item md={12}>
						<FormNoteEdit
							{...{
								register,
								handleSubmit,
								noteEditSubmit,
								errors,
								isSaving,
							}}
						/>
					</Grid>
					<Grid item md={12}>
						<NoteTodo {...{ todoData, setTodoData }} />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default NoteEditView;
