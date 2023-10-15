import { LoadingButton } from "@mui/lab";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	Grid,
	IconButton,
	Switch,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { MdOutlineClose } from "react-icons/md";

const DialogShareView: React.FC<any> = props => {
	const { isOpenDialogShare, closeDialogShare } = props;

	return (
		<Dialog fullWidth maxWidth="sm" open={isOpenDialogShare}>
			<DialogTitle sx={{ marginBottom: "1rem" }}>
				<Grid
					container
					alignItems="center"
					justifyContent="space-between">
					<Grid item>
						<Typography variant="h6" fontWeight={700}>
							Share text
						</Typography>
					</Grid>
					<Grid item>
						<IconButton onClick={closeDialogShare}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Grid container gap={1}>
					<Grid item md>
						<TextField
							value="https://taskyup.com/text/public?text_id=4c3d9314-b6cf-4"
							disabled
							fullWidth
							variant="standard"
						/>
					</Grid>

					<Grid item md="auto">
						<Button variant="text" color="inherit">
							Copy link
						</Button>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Grid container>
					<Grid item md>
						<FormControlLabel
							control={
								<Switch
									inputProps={{ "aria-label": "controlled" }}
								/>
							}
							label="Public"
						/>
					</Grid>
					<Grid item md textAlign="right">
						<LoadingButton
							form="form-new-board"
							variant="contained"
							type="submit">
							Save
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogShareView;
