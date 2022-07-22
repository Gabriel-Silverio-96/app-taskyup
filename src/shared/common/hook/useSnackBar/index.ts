import { AlertColor, SnackbarProps } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { SNACKBAR_CLOSE_TYPE, SNACKBAR_OPEN_TYPE } from "shared/common/store/SnackBar/SnackBar.reducer";
import { ISnackBarState } from "shared/common/store/SnackBar/types/Snackbar.types";
import { createAction } from "shared/common/store/store.action";

interface ISnackbarProps extends SnackbarProps {
	severity?: AlertColor;
}

export default function useSnackBar() {
	const dispatch = useDispatch();

	const snackBarSuccess = useCallback((props: ISnackbarProps) => {
		dispatch(createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, { 
			open: true, 
			severity: "success", 
			...props 
		}));
	}, [dispatch]);

	const snackBarError = useCallback((props: ISnackbarProps) => {
		dispatch(createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, { 
			open: true, 
			severity: "error", 
			...props 
		}));
	}, [dispatch]);

	const snackBarInfo = useCallback((props: ISnackbarProps) => {
		dispatch(createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, { 
			open: true, 
			severity: "info", 
			...props 
		}));
	}, [dispatch]);

	const snackBarWarning = useCallback((props: ISnackbarProps) => {
		dispatch(createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, { 
			open: true, 
			severity: "warning", 
			...props 
		}));
	}, [dispatch]);

	const snackBarClose = useCallback(() => {
		dispatch(createAction<ISnackBarState>(SNACKBAR_CLOSE_TYPE));
	}, [dispatch]);

	return { snackBarSuccess, snackBarError, snackBarInfo, snackBarWarning, snackBarClose };
}