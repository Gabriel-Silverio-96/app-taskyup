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
import { IDialogDeleteOneTextView } from "./types";

const DialogDeleteOneTextView: React.FC<IDialogDeleteOneTextView> = props => {
	const {
		dialogDeleteOneText,
		closeDialogDeleteOneText,
		fetchDelete,
		isDeleting,
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
							disabled={isDeleting}>
							<MdOutlineClose />
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
							disabled={isDeleting}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton
							variant="contained"
							onClick={fetchDelete}
							loading={isDeleting}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteOneTextView;
