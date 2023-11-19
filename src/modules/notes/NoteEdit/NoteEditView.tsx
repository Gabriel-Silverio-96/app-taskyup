import React from "react";
import FormNoteEdit from "modules/notes/NoteEdit/components/FormNoteEdit";
import { Grid } from "@mui/material";
import Loading from "shared/components/Loading/Loading";
import { INoteEditView } from "modules/notes/NoteEdit/types";
import NoteTodo from "modules/notes/NoteEdit/components/NoteTodo";

const NoteEditView: React.FC<INoteEditView> = props => {
	const {
		register,
		handleSubmit,
		handleSubmitNoteEdit,
		errors,
		isFetching,
		isSaving,
		todoData,
		setTodoData,
		setTodoIdsToDelete,
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
								handleSubmitNoteEdit,
								errors,
								isSaving,
							}}
						/>
					</Grid>
					<Grid item md={12} width="100%">
						<NoteTodo
							{...{
								todoData,
								setTodoData,
								setTodoIdsToDelete,
							}}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default NoteEditView;
