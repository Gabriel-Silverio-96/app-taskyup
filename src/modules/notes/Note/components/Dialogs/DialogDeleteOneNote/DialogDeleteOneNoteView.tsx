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
import type { IDialogDeleteOneNoteView } from "modules/notes/Note/components/Dialogs/DialogDeleteOneNote/types";
import React from "react";
import { FiX } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const DialogDeleteOneNoteView: React.FC<IDialogDeleteOneNoteView> = props => {
	const {
		isOpenDialogDeleteOneNote,
		closeDialogDeleteOneNote,
		mutate,
		isLoading,
		onClose,
	} = props;
	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={isOpenDialogDeleteOneNote}
			onClose={onClose}>
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
							disabled={isLoading}>
							<FiX size={ICON_SIZE.MEDIUM} />
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
							disabled={isLoading}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton
							variant="contained"
							onClick={() => mutate()}
							loading={isLoading}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteOneNoteView;
