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
import { IDialogDeleteAllNotesView } from "modules/notes/Note/components/Dialogs/DialogDeleteAllNotes/types";
import React from "react";
import { FiX } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const DialogDeleteAllNotesView: React.FC<IDialogDeleteAllNotesView> = props => {
	const {
		isOpenDialogDeleteAllNotes,
		closeDialogDeleteAllNotes,
		mutate,
		isDeleting,
	} = props;
	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={isOpenDialogDeleteAllNotes}
			onClose={!isDeleting ? closeDialogDeleteAllNotes : () => ""}>
			<DialogTitle sx={{ mb: 2 }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Delete all notes
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							onClick={closeDialogDeleteAllNotes}
							disabled={isDeleting}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography color="GrayText">
					Do you want to delete all notes?
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
							onClick={closeDialogDeleteAllNotes}
							disabled={isDeleting}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton
							variant="contained"
							onClick={() => mutate()}
							loading={isDeleting}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteAllNotesView;
