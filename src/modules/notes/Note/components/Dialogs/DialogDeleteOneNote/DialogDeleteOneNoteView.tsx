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
import { FiX } from "react-icons/fi";
import { IDialogDeleteOneNoteView } from "./types";

const DialogDeleteOneNoteView: React.FC<IDialogDeleteOneNoteView> = props => {
	const {
		isOpenDialogDeleteOneNote,
		closeDialogDeleteOneNote,
		handleClickDeleteOneNote,
		isDeleting,
	} = props;
	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={isOpenDialogDeleteOneNote}
			onClose={!isDeleting ? closeDialogDeleteOneNote : () => ""}>
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
						<IconButton
							onClick={closeDialogDeleteOneNote}
							disabled={isDeleting}>
							<FiX size={18} />
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
				<Grid
					container
					justifyContent="space-between"
					alignItems="center">
					<Grid item md="auto">
						<Button
							variant="outlined"
							onClick={closeDialogDeleteOneNote}
							disabled={isDeleting}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton
							variant="contained"
							onClick={handleClickDeleteOneNote}
							loading={isDeleting}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteOneNoteView;
