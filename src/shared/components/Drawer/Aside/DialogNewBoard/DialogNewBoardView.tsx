import { LoadingButton } from "@mui/lab";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle, Grid,
	IconButton, MenuItem, TextField,
	Typography
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { IDialogNewBoardView } from "./types/DialogNewBoard.component";

const DialogNewBoardView: React.FC<IDialogNewBoardView> = (props) => {
	const { 
		register,
		fullScreen,
		openDialog,
		closeDialogNewBoard,
		handleSubmit,
		fetchDialogNewBoard,
		errors,
		isLoading
	} = props;
	return (
		<Dialog 
			fullWidth
			maxWidth="xs"
			open={openDialog} 
			fullScreen={fullScreen}
			onClose={closeDialogNewBoard}
		>
			<DialogTitle sx={{marginBottom: "1rem"}}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>New Board</Typography>
					</Grid>
					<Grid item> 
						<IconButton onClick={closeDialogNewBoard} disabled={isLoading}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form 
					id="form-new-board"
					onSubmit={handleSubmit(fetchDialogNewBoard)}>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextField 
								label="Board name"
								size="small"
								fullWidth 
								{...register("title")}
								error={errors.title && Boolean(errors.title)}
								helperText={errors.title ? errors.title?.message : ""}
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
								error={errors.board_type_id && Boolean(errors.board_type_id)}
								helperText={errors.board_type_id ? errors.board_type_id?.message : ""}
							>
								<MenuItem value="1f819d7d-11b5-4742-be86-2286ef50b5d5">Notes</MenuItem>
								<MenuItem value="7b784aee-0133-4d6a-b14b-8dbbe19e9428" disabled>Text</MenuItem>
								<MenuItem value="1cf4ff82-59bd-4733-890c-c9226ea0df2f" disabled>Kanban</MenuItem>
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
					loading={isLoading}
				>
					Save
				</LoadingButton>				
			</DialogActions>
		</Dialog>
	);
};

export default DialogNewBoardView;