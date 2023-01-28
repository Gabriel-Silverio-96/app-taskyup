import { LoadingButton } from "@mui/lab";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import ColorPicker from "shared/components/ColorPicker";
import Date from "shared/components/Date";
import Loading from "shared/components/Loading";
import { IDialogEditNoteView } from "./types/DialogEditNote.component";

const DialogEditNoteView: React.FC<IDialogEditNoteView> = (props) => {
	const { 
		fullScreen, 
		register, 
		handleSubmit,
		fetchDialogEditNote,
		errors, 
		closeDialogEditNote, 
		isOpenDialogEditNote, 
		isLoading, 
		isSaving
	} = props;
	const loadingGrid = { display: isLoading ? "flex" : "none", mb: 5 };
	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={isOpenDialogEditNote}
			fullScreen={fullScreen}
			onClose={!isSaving ? closeDialogEditNote : () => ""}
		>
			<DialogTitle sx={ { mb: 2 }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>Edit note</Typography>
					</Grid>
					<Grid item>
						<IconButton onClick={closeDialogEditNote} disabled={isSaving}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<Grid container justifyContent="center" sx={loadingGrid}>
				<Loading isLoading={isLoading} message="Loading" />
			</Grid>
			{!isLoading && (
				<>
					<DialogContent>
						<form method="POST" id="form-edit-note" onSubmit={handleSubmit(fetchDialogEditNote)}>
							<Grid container direction="column" spacing={5}>						
								<Grid item>
									<ColorPicker 
										label="Select color" 
										id="dialog-edit-note-color-picker"
										{...register("color_note")}
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
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item md="auto">
								<Typography 
									variant="caption" 
									color="GrayText" 
									display="flex" 
									alignItems="center" sx={{ gap: 0.5 } }
								>
									Created at
									<Date {...register("note_created_at")} />
								</Typography>
							</Grid>
							<Grid item md="auto">
								<LoadingButton 							
									form="form-edit-note"
									variant="contained"
									type="submit"
									loading={isSaving}
								>
									Save
								</LoadingButton>	
							</Grid>
						</Grid>
					</DialogActions>
				</>
			)}
		</Dialog>
	);
};

export default DialogEditNoteView;