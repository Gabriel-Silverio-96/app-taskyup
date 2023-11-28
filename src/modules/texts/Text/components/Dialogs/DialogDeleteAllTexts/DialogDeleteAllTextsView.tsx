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
import { IDialogDeleteAllTextsView } from "./types";
import { FiX } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const DialogDeleteAllTextsView: React.FC<IDialogDeleteAllTextsView> = props => {
	const {
		dialogDeleteAllText,
		closeDialogDeleteAllTexts,
		fetchDeleteAll,
		isLoading,
		onClose,
	} = props;

	const { open } = dialogDeleteAllText;

	return (
		<Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
			<DialogTitle sx={{ mb: 2 }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Delete all texts
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							onClick={closeDialogDeleteAllTexts}
							disabled={isLoading}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography color="GrayText">
					Do you want to delete all texts?
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
							onClick={closeDialogDeleteAllTexts}
							disabled={isLoading}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton
							variant="contained"
							onClick={fetchDeleteAll}
							loading={isLoading}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteAllTextsView;
