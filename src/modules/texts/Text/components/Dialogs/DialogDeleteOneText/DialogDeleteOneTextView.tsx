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
import type { IDialogDeleteOneTextView } from "modules/texts/Text/components/Dialogs/DialogDeleteOneText/types";
import { FiX } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const DialogDeleteOneTextView: React.FC<IDialogDeleteOneTextView> = props => {
	const {
		dialogDeleteOneText,
		closeDialogDeleteOneText,
		mutate,
		isLoading,
		onClose,
	} = props;

	const { open } = dialogDeleteOneText;

	return (
		<Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
			<DialogTitle sx={{ mb: 2 }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Delete text
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							onClick={closeDialogDeleteOneText}
							disabled={isLoading}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography color="GrayText">
					Do you want to delete this text?
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
							onClick={closeDialogDeleteOneText}
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

export default DialogDeleteOneTextView;
