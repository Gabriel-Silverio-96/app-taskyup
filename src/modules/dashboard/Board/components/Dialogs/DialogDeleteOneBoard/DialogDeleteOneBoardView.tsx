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
import { IDialogDeleteOneBoardView } from "modules/dashboard/Board/components/Dialogs/DialogDeleteOneBoard/types";
import { ICON_SIZE } from "shared/constants";

const DialogDeleteOneBoardView: React.FC<IDialogDeleteOneBoardView> = props => {
	const {
		isOpenDialogDeleteOneBoard,
		closeDialogDeleteOneBoard,
		dialogDeleteOneBoardSubmit,
		isLoading,
	} = props;

	const onClose = !isLoading ? closeDialogDeleteOneBoard : () => "";

	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={isOpenDialogDeleteOneBoard}
			onClose={onClose}>
			<DialogTitle sx={{ marginBottom: "1rem" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Delete Board
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							onClick={closeDialogDeleteOneBoard}
							disabled={isLoading}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography color="GrayText">
					Would you like to delete board? This action deletes all
					notes from this board
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
							onClick={closeDialogDeleteOneBoard}
							disabled={isLoading}>
							No
						</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton
							variant="contained"
							type="submit"
							loading={isLoading}
							onClick={dialogDeleteOneBoardSubmit}>
							Yes
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogDeleteOneBoardView;
