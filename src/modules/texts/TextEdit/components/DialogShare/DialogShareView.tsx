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
import Loading from "shared/components/Loading";
import { IDialogShareView } from "./types/DialogShare.types";

const DialogShareView: React.FC<IDialogShareView> = props => {
	const {
		data,
		isFetching,
		isOpenDialogShare,
		closeDialogShare,
		handleChangeSwitch,
		handleClickCopy,
		handleClickSave,
		isSaving,
		URLPublicText,
	} = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={isOpenDialogShare}
			onClose={!isSaving ? closeDialogShare : () => ""}>
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
						<IconButton
							onClick={closeDialogShare}
							disabled={isSaving}>
							<MdOutlineClose />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Grid container gap={1}>
					<Grid item md>
						<TextField
							value={URLPublicText}
							disabled
							fullWidth
							variant="standard"
						/>
					</Grid>

					<Grid item md="auto">
						<Button
							variant="text"
							color="inherit"
							onClick={handleClickCopy}>
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
									checked={data.public}
									onChange={handleChangeSwitch}
								/>
							}
							label="Public"
						/>
					</Grid>
					<Grid item md textAlign="right">
						<LoadingButton
							form="form-new-board"
							variant="contained"
							loading={isSaving}
							onClick={handleClickSave}>
							Save
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogShareView;