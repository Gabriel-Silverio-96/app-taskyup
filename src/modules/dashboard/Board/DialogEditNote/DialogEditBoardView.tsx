import { LoadingButton } from "@mui/lab";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle, Grid,
	IconButton, TextField,
	Typography
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DialogEditBoardView: React.FC<any> = (props) => {
	const { 
		register,
		fullScreen,
		handleSubmit,
		fetchDialogEditBoard,
		errors,
		isLoading
	} = props;
	return (
		<Dialog 
			fullWidth
			maxWidth="xs"
			open={false}
			fullScreen={fullScreen}
			onClose={() => ""}
		>
			<DialogTitle sx={{marginBottom: "1rem"}}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>Edit Board</Typography>
					</Grid>
					<Grid item> 
						<IconButton onClick={() => ""} disabled={isLoading}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form 
					id="form-new-board"
					onSubmit={handleSubmit(fetchDialogEditBoard)}>
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
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item md="auto">
						<Typography variant="caption" color="GrayText">
							Created at 27/02/2022
						</Typography>
					</Grid>
					<Grid item md="auto">
						<LoadingButton 							
							form="form-new-board"
							variant="contained"
							type="submit"
							loading={isLoading}
						>
							Save
						</LoadingButton>				
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogEditBoardView;