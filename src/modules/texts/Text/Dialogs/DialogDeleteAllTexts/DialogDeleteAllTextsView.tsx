import { LoadingButton } from "@mui/lab";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Typography
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DialogDeleteAllTextsView: React.FC<any> = (props) => {
	const { dialogDeleteAllText, closeDialogDeleteAllTexts } = props;

	const { open } = dialogDeleteAllText;
	const isDeleting = false;

	return (
		<Dialog fullWidth maxWidth="xs" open={open}>
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
						<IconButton onClick={closeDialogDeleteAllTexts} disabled={isDeleting}>
							<MdOutlineClose />
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
				<Grid container	justifyContent="space-between" alignItems="center">
					<Grid item md="auto">
						<Button variant="outlined" onClick={closeDialogDeleteAllTexts} disabled={isDeleting}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton variant="contained" loading={isDeleting}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteAllTextsView;