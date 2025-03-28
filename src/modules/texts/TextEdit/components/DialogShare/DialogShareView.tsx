import { LoadingButton } from "@mui/lab";
import {
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
import { FiCopy, FiLink, FiX } from "react-icons/fi";
import Loading from "shared/components/Loading";
import type { IDialogShareView } from "modules/texts/TextEdit/components/DialogShare/types";
import { ICON_SIZE } from "shared/constants";

const DialogShareView: React.FC<IDialogShareView> = props => {
	const {
		data,
		isFetching,
		isOpenDialogShare,
		closeDialogShare,
		handleChangeSwitch,
		handleClickCopy,
		mutate,
		isLoading,
		URLPublicText,
	} = props;

	if (isFetching) return <Loading isLoading backdrop />;

	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={isOpenDialogShare}
			onClose={!isLoading ? closeDialogShare : () => ""}>
			<DialogTitle sx={{ mb: 2 }}>
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
							disabled={isLoading}>
							<FiX size={ICON_SIZE.MEDIUM} />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<DialogContent>
				<Grid container gap={3}>
					<Grid item md>
						<TextField
							value={URLPublicText}
							disabled
							fullWidth
							variant="standard"
						/>
					</Grid>

					<Grid item md="auto">
						<IconButton onClick={handleClickCopy}>
							<FiCopy size={ICON_SIZE.MEDIUM} />
						</IconButton>
						<a
							href={URLPublicText}
							target="_blank"
							rel="noopener noreferrer">
							<IconButton>
								<FiLink size={ICON_SIZE.MEDIUM} />
							</IconButton>
						</a>
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
							loading={isLoading}
							onClick={() => mutate()}>
							Save
						</LoadingButton>
					</Grid>
				</Grid>
			</DialogActions>
		</Dialog>
	);
};

export default DialogShareView;
