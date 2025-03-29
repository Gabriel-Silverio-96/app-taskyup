import { SnackbarProps } from "@mui/material";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	SNACKBAR_CLOSE_TYPE,
	SNACKBAR_OPEN_TYPE,
} from "shared/common/store/Snackbar/Snackbar.reducer";
import { ISnackbarState } from "shared/common/store/Snackbar/types";
import { createAction } from "shared/common/store/store.action";
import type { ISnackbarProps } from "shared/common/hooks/useSnackbar/types";

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
		dispatch(createAction<ISnackbarState>(SNACKBAR_CLOSE_TYPE));
	}, [dispatch]);

	return {
		snackbarSuccess,
		snackbarError,
		snackbarInfo,
		snackbarWarning,
		snackbarClose,
	};
}
