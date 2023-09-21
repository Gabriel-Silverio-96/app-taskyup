import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { ISnackBarView } from "./types/SnackBar.component";

const SnackBarView: React.FC<ISnackBarView> = ({
	snackBarProps,
	snackBarClose,
	defineAutoHideDuration,
}) => {
	const { message, severity } = snackBarProps;
	
	return (
		<Snackbar
			{...snackBarProps}
			onClose={snackBarClose}
			autoHideDuration={defineAutoHideDuration}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			transitionDuration={0}>
			<Alert severity={severity}>{message}</Alert>
		</Snackbar>
	);
};

export default SnackBarView;
