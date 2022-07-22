import { AlertColor } from "@mui/material";

export interface ISnackBarState {
    open: boolean;
    message: string;
    severety: AlertColor;
}

export interface ISnackBarAction {
    type: "SNACKBAR_OPEN";
    payload: ISnackBarState;
}