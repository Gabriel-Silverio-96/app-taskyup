import { AlertColor, SnackbarProps } from "@mui/material";

export type TypeSnackbar = "SNACKBAR_OPEN" | "SNACKBAR_CLOSE";

export interface ISnackbarState extends SnackbarProps {
	severety: AlertColor;
}

export interface ISnackbarAction {
	type: TypeSnackbar;
	payload: ISnackbarState;
}
