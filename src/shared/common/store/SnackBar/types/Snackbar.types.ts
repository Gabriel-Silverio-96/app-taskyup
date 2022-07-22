import { AlertColor, SnackbarProps } from "@mui/material";

export type TypeSnackBar = "SNACKBAR_OPEN" | "SNACKBAR_CLOSE"

export interface ISnackBarState extends SnackbarProps {
    severety: AlertColor;
}

export interface ISnackBarAction {
    type: TypeSnackBar;
    payload: ISnackBarState;
}