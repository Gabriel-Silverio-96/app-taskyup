import { LoadingButton } from "@mui/lab";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { IDialogDeleteSingleNoteView } from "./types/DialogDeleteSingleNote.component";

const DialogDeleteSingleNoteView: React.FC<IDialogDeleteSingleNoteView> = (props) => {
	const { 
		isOpenDialogDeleteSingleNote, 
		closeDialogDeleteSingleNote, 
		fetchDeleteSingleNote,
		isDeleting
	 } = props;
	return (
		<Dialog fullWidth maxWidth="xs" 
			open={isOpenDialogDeleteSingleNote}
			onClose={!isDeleting ? closeDialogDeleteSingleNote : () => ""}
		>
			<DialogTitle sx={{ mb: 2 }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Delete Note
						</Typography>
					</Grid>
					<Grid item>
						<IconButton onClick={closeDialogDeleteSingleNote} disabled={isDeleting}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography color="GrayText">					
					Do you want to delete this note?
				</Typography>
			</DialogContent>
			<DialogActions>
				<Grid container	justifyContent="space-between" alignItems="center">
					<Grid item md="auto">
						<Button variant="outlined" onClick={closeDialogDeleteSingleNote} disabled={isDeleting}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton variant="contained" onClick={fetchDeleteSingleNote} loading={isDeleting}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteSingleNoteView;
