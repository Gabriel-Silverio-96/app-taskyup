import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	Grid,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography
} from "@mui/material";
import { MdOutlineClose } from "react-icons/md";
import React from "react";

const DialogNewBoardView: React.FC<any> = (props) => {
	const { fullScreen, openDialog, closeDialogNewBoard } = props;
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
						<IconButton onClick={closeDialogNewBoard}><MdOutlineClose /></IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form>
					<Grid container direction="column" spacing={5}>
						<Grid item>
							<TextField label="Board name" size="small" fullWidth />
						</Grid>
						<Grid item>
							<FormControl fullWidth>
								<InputLabel variant="outlined" id="what-you-want-to-create" sx={{ top: "-3px", color: "#616161" }}>
									What you want to create
								</InputLabel>
								<Select
									label="What you want to create"
									labelId="what-you-want-to-create"
									id="what-you-want-to-create"
									size="small"
								>
									<MenuItem value="739ddd82-c403-49be-96da-bac53f0f6dae">Notes</MenuItem>
									<MenuItem value="7b784aee-0133-4d6a-b14b-8dbbe19e9428" disabled>Text</MenuItem>
									<MenuItem value="1cf4ff82-59bd-4733-890c-c9226ea0df2f" disabled>Kanban</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<Button variant="contained">Save</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DialogNewBoardView;