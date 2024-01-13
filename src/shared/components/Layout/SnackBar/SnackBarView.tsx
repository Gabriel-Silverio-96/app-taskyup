import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { ISnackBarView } from "./types/SnackBar.component";

const SnackBarView: React.FC<ISnackBarView> = ({
	snackBarProps,
	snackbarClose,
	defineAutoHideDuration,
}) => {
	const { message, severity } = snackBarProps;

	return (
		<Snackbar
			onClose={snackbarClose}
			autoHideDuration={defineAutoHideDuration}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			transitionDuration={0}
			{...snackBarProps}>
			<Alert severity={severity}>{message}</Alert>
		</Snackbar>
	);
};

export default SnackBarView;
