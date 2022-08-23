import { LoadingButton } from "@mui/lab";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DialogNewNoteView: React.FC<any> = (props) => {
	const { fullScreen } = props;
	const isSaving = false;
	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={true}
			fullScreen={fullScreen}
		>
			<DialogTitle sx={ { mb: 2 }}>
				<Grid container alignItems="center" justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>New note</Typography>
					</Grid>
					<Grid item>
						<IconButton>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<form method="POST" id="form-new-note" onSubmit={() => ""}>
					<Grid container direction="column" spacing={5}>						
						<Grid item>
							<input type="color" />
						</Grid>
						<Grid item>
							<TextField 
								label="Title note"
								size="small"
								fullWidth
							/>
						</Grid>
						<Grid item>
							<TextField 
								label="Observation"
								size="small"
								fullWidth
								multiline
								rows={8}
							/>
						</Grid>
					</Grid>
				</form>
			</DialogContent>
			<DialogActions>
				<LoadingButton 							
					form="form-new-note"
					variant="contained"
					type="submit"
					loading={isSaving}
				>
					Save
				</LoadingButton>	
			</DialogActions>
		</Dialog>

	);
};

export default DialogNewNoteView;