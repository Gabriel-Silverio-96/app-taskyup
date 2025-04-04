import { LoadingButton } from "@mui/lab";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { FiX } from "react-icons/fi";
import Loading from "shared/components/Loading";
import DialogBackground from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/components/DialogBackground";
import type { IDialogEditBoardView } from "modules/dashboard/Board/components/Dialogs/DialogEditBoard/types";
import { ICON_SIZE } from "shared/constants";
import { fieldErrors } from "shared/utils/field-errors";

const DialogEditBoardView: React.FC<IDialogEditBoardView> = props => {
	const {
		register,
		fullScreen,
		handleSubmit,
		mutate,
		errors,
		isFetching,
		isSaving,
		isOpenDialogEditBoard,
		closeDialogEditBoard,
		onClose,
		disabledIconButtonClose,
		valueCreatedAt,
	} = props;

	const gridLoadingStyles = { display: isFetching ? "flex" : "none", mb: 5 };

	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={isOpenDialogEditBoard}
			fullScreen={fullScreen}
			onClose={onClose}>
			<DialogTitle>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Edit Board
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							onClick={closeDialogEditBoard}
							disabled={disabledIconButtonClose}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<Grid container justifyContent="center" sx={gridLoadingStyles}>
				<Loading isLoading={isFetching} message="Loading" />
			</Grid>

			<div hidden={isFetching}>
				<DialogContent sx={{ pt: 0 }}>
					<DialogBackground />
					<form id="form-edit-board" onSubmit={handleSubmit(mutate)}>
						<Grid container direction="column" spacing={5}>
							<Grid item>
								<TextField
									label="Board name"
									size="small"
									fullWidth
									{...register("title")}
									{...fieldErrors({ errors, field: "title" })}
									inputProps={{
										"data-testid": "input-edit",
									}}
								/>
							</Grid>
						</Grid>
					</form>
				</DialogContent>
				<DialogActions>
					<Grid
						container
						justifyContent="space-between"
						alignItems="center">
						<Grid item md="auto">
							<Typography variant="caption" color="GrayText">
								Created at {valueCreatedAt}
							</Typography>
						</Grid>
						<Grid item md="auto">
							<LoadingButton
								form="form-edit-board"
								variant="contained"
								type="submit"
								loading={isSaving}>
								Save
							</LoadingButton>
						</Grid>
					</Grid>
				</DialogActions>
			</div>
		</Dialog>
	);
};

export default DialogEditBoardView;
