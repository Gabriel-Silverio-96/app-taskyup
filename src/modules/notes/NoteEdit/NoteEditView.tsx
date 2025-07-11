import React from "react";
import FormNoteEdit from "modules/notes/NoteEdit/components/FormNoteEdit";
import { Grid } from "@mui/material";
import Loading from "shared/components/Loading/Loading";
import type { INoteEditView } from "modules/notes/NoteEdit/types";
import NoteTodo from "modules/notes/NoteEdit/components/NoteTodo";

const NoteEditView: React.FC<INoteEditView> = props => {
	const {
		register,
		handleSubmit,
		mutate,
		errors,
		isFetching,
		isSaving,
		todoData,
		setTodoData,
		setTodoIdsToDelete,
		setValue,
		watch,
	} = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<Grid container maxWidth={800} margin="auto">
			<Loading isLoading={isSaving} backdrop />
			<Grid item xs={12}>
				<Grid container justifyContent="center">
					<Grid item md={12}>
						<FormNoteEdit
							{...{
								register,
								handleSubmit,
								mutate,
								errors,
								isSaving,
								setValue,
								watch,
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
