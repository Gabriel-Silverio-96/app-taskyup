import { LoadingButton } from "@mui/lab";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import ColorPicker from "shared/components/ColorPicker";
import { IDialogNewNoteView } from "./types/DialogNewNotes.component";

const DialogNewNoteView: React.FC<IDialogNewNoteView> = (props) => {
	const { 
		fullScreen, 
		register,
		handleSubmit, 
		fetchDialogNewNote, 
		errors, 
		isOpenDialogNewNote, 
		closeDialogNewNote, 
		isSaving 
	} = props;
	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={isOpenDialogNewNote}
			fullScreen={fullScreen}
			onClose={!isSaving ? closeDialogNewNote : () => ""}
		>
			<DialogTitle sx={ { mb: 2 }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>New note</Typography>
					</Grid>
					<Grid item>
						<IconButton onClick={closeDialogNewNote} disabled={isSaving}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form method="POST" id="form-new-note" onSubmit={handleSubmit(fetchDialogNewNote)}>
					<Grid container direction="column" spacing={5}>						
						<Grid item>
							<ColorPicker 
								label="Select color" 
								id="dialog-new-note-color-picker"
								{...register("color_note")}
								defaultValue="#9C10FF"
							/>
						</Grid>
						<Grid item>
							<TextField 
								label="Title note"
								size="small"
								fullWidth
								{...register("title_note")}
								error={errors.title_note && Boolean(errors.title_note)}
								helperText={errors.title_note ? errors.title_note?.message : ""}
							/>
						</Grid>
						<Grid item>
							<TextField 
								label="Observation"
								size="small"
								fullWidth
								multiline
								rows={8}
								{...register("observation")}
								error={errors.observation && Boolean(errors.observation)}
								helperText={errors.observation ? errors.observation?.message : ""}
							/>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<LoadingButton 							
					form="form-new-note"
					variant="contained"
					type="submit"
					loading={isSaving}
				>
					Save
				</LoadingButton>	
			</DialogActions>
		</Dialog>

	);
};

export default DialogNewNoteView;