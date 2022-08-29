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

const DialogDeleteSingleNoteView: React.FC = () => {
	return (
		<Dialog fullWidth maxWidth="xs" open={false}>
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
						<IconButton>
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
						<Button variant="outlined">No</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton variant="contained" type="submit">
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteSingleNoteView;
