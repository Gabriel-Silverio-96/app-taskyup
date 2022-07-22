import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { ISnackBarView } from "./types/SnackBar.component";

const SnackBarView: React.FC<ISnackBarView> = ({ snackBarProps, snackBarClose }) => {
	const { autoHideDuration, message, severity } = snackBarProps;
			
	return (
		<Snackbar {...snackBarProps}
			onClose={snackBarClose}
			autoHideDuration={!autoHideDuration ? 3000 : autoHideDuration}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
		>
			<Alert severity={severity}>{message}</Alert>
		</Snackbar>
	);
};

export default SnackBarView;