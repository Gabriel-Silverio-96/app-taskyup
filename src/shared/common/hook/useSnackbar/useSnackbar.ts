import { SnackbarProps } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	SNACKBAR_CLOSE_TYPE,
	SNACKBAR_OPEN_TYPE,
} from "shared/common/store/SnackBar/SnackBar.reducer";
import { ISnackBarState } from "shared/common/store/SnackBar/types/Snackbar.types";
import { createAction } from "shared/common/store/store.action";
import { ISnackbarProps } from "shared/common/hook/useSnackbar/types";

export default function useSnackbar() {
	const dispatch = useDispatch();

	const snackbarSuccess = useCallback(
		(props: ISnackbarProps) => {
			dispatch(
				createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, {
					open: true,
					severity: "success",
					...props,
				})
			);
		},
		[dispatch]
	);

	const snackbarError = useCallback(
		(props: ISnackbarProps) => {
			dispatch(
				createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, {
					open: true,
					severity: "error",
					...props,
				})
			);
		},
		[dispatch]
	);

	const snackbarInfo = useCallback(
		(props: ISnackbarProps) => {
			dispatch(
				createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, {
					open: true,
					severity: "info",
					...props,
				})
			);
		},
		[dispatch]
	);

	const snackbarWarning = useCallback(
		(props: ISnackbarProps) => {
			dispatch(
				createAction<SnackbarProps>(SNACKBAR_OPEN_TYPE, {
					open: true,
					severity: "warning",
					...props,
				})
			);
		},
		[dispatch]
	);

	const snackbarClose = useCallback(() => {
		dispatch(createAction<ISnackBarState>(SNACKBAR_CLOSE_TYPE));
	}, [dispatch]);

	return {
		snackbarSuccess,
		snackbarError,
		snackbarInfo,
		snackbarWarning,
		snackbarClose,
	};
}
