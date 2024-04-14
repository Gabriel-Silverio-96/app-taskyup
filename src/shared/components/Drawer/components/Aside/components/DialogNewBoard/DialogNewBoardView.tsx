import { LoadingButton } from "@mui/lab";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { IDialogNewBoardView } from "shared/components/Drawer/components/Aside/components/DialogNewBoard/types";
import {
	BOARD_TYPE_ID
} from "shared/constants";
import { FiX } from "react-icons/fi";
import { ICON_SIZE } from "shared/constants";

const DialogNewBoardView: React.FC<IDialogNewBoardView> = props => {
	const {
		register,
		fullScreen,
		openDialog,
		closeDialogNewBoard,
		handleSubmit,
		mutate,
		errors,
		isLoading,
	} = props;
	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={openDialog}
			fullScreen={fullScreen}
			onClose={!isLoading ? closeDialogNewBoard : () => ""}>
			<DialogTitle sx={{ marginBottom: "1rem" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							New Board
						</Typography>
					</Grid>
					<Grid item>
						<IconButton
							onClick={closeDialogNewBoard}
							disabled={isLoading}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form id="form-new-board" onSubmit={handleSubmit(mutate)}>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextField
								label="Board name"
								size="small"
								fullWidth
								{...register("title")}
								error={errors.title && Boolean(errors.title)}
								helperText={
									errors.title ? errors.title?.message : ""
								}
							/>
						</Grid>
						<Grid item>
							<TextField
								label="What you want to create"
								id="what-you-want-to-create"
								size="small"
								defaultValue=""
								select
								fullWidth
								{...register("board_type_id")}
								error={
									errors.board_type_id &&
									Boolean(errors.board_type_id)
								}
								helperText={
									errors.board_type_id
										? errors.board_type_id?.message
										: ""
								}
								inputProps={{
									"data-testid":
										"board-type-id-input-inside-select",
								}}>
								<MenuItem value={BOARD_TYPE_ID.NOTES_BOARD_TYPE_ID}>
									Notes
								</MenuItem>
								<MenuItem value={BOARD_TYPE_ID.TEXTS_BOARD_TYPE_ID}>
									Texts
								</MenuItem>
								<MenuItem value={BOARD_TYPE_ID.KANBAN_BOARD_TYPE_ID} disabled>
									Kanban
								</MenuItem>
							</TextField>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<LoadingButton
					form="form-new-board"
					variant="contained"
					type="submit"
					loading={isLoading}>
					Save
				</LoadingButton>
			</DialogActions>
		</Dialog>
	);
};

export default DialogNewBoardView;
