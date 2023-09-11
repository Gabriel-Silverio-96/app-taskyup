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
import { MdOutlineClose } from "react-icons/md";
import { IDialogNewBoardView } from "./types/DialogNewBoard.component";
import { ID_NOTES, ID_TEXTS, ID_KANBAN } from "./constants";

const DialogNewBoardView: React.FC<IDialogNewBoardView> = props => {
	const {
		register,
		fullScreen,
		openDialog,
		closeDialogNewBoard,
		handleSubmit,
		handleSubmitCreateBoard,
		errors,
		isSaving,
	} = props;
	return (
		<Dialog
			fullWidth
			maxWidth="xs"
			open={openDialog}
			fullScreen={fullScreen}
			onClose={!isSaving ? closeDialogNewBoard : () => ""}>
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
							disabled={isSaving}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form
					id="form-new-board"
					onSubmit={handleSubmit(handleSubmitCreateBoard)}>
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
								<MenuItem value={ID_NOTES}>Notes</MenuItem>
								<MenuItem value={ID_TEXTS}>Texts</MenuItem>
								<MenuItem value={ID_KANBAN} disabled>
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
					loading={isSaving}>
					Save
				</LoadingButton>
			</DialogActions>
		</Dialog>
	);
};

export default DialogNewBoardView;
