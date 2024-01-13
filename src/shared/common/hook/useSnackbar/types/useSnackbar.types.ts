import { AlertColor, SnackbarProps } from "@mui/material";

export interface ISnackbarProps extends SnackbarProps {
	severity?: AlertColor;
}