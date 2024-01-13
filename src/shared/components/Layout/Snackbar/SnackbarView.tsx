import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { ISnackBarView } from "./types/SnackBar.component";

const SnackbarView: React.FC<ISnackBarView> = ({
	snackbarProps,
	snackbarClose,
	defineAutoHideDuration,
}) => {
	const { message, severity } = snackbarProps;

	return (
		<Snackbar
			onClose={snackbarClose}
			autoHideDuration={defineAutoHideDuration}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			transitionDuration={0}
			{...snackbarProps}>
			<Alert severity={severity}>{message}</Alert>
		</Snackbar>
	);
};

export default SnackbarView;
