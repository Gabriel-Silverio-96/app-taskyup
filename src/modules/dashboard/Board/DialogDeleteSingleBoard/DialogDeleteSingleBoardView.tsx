import { LoadingButton } from "@mui/lab";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle, Grid,
	IconButton,
	Typography
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DialogDeleteSingleBoardView: React.FC<any> = (props) => {
	const { isOpenDialogDeleteSingleBoard, closeDialogDeleteSingleBoard } = props;
	return (
		<Dialog 
			fullWidth
			maxWidth="xs"
			open={isOpenDialogDeleteSingleBoard}			
			onClose={closeDialogDeleteSingleBoard}
		>
			<DialogTitle sx={{marginBottom: "1rem"}}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>Delete Board</Typography>
					</Grid>
					<Grid item> 
						<IconButton onClick={closeDialogDeleteSingleBoard}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Typography color="GrayText">
                    Would you like to delete board? This action deletes all notes from this board
				</Typography>
			</DialogContent>
			<DialogActions>
				<Grid container justifyContent="space-between" alignItems="center">
					<Grid item md="auto">
						<Button variant="outlined" onClick={closeDialogDeleteSingleBoard}>No</Button>
					</Grid>
					<Grid item md="auto">
						<LoadingButton 							
							form="form-new-board"
							variant="contained"
							type="submit"
						>
                            Yes
						</LoadingButton>				
					</Grid>
				</Grid>
			</DialogActions>		
		</Dialog>
	);
};

export default DialogDeleteSingleBoardView;