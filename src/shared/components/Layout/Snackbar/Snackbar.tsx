import React from "react";
import { useSelector } from "react-redux";
import useSnackbar from "shared/common/hook/useSnackbar";
import { ISnackBarState } from "shared/common/store/SnackBar/types/Snackbar.types";
import SnackBarView from "./SnackbarView";

const THREE_SECONDS_AUTO_HIDE_DURATION = 3000;

const SnackBar: React.FC = () => {
	const { snackbarClose } = useSnackbar();
	const snackBarProps = useSelector(
		(state: { snackBar: ISnackBarState }) => state.snackBar
	);

	const defineAutoHideDuration =
		snackBarProps.autoHideDuration ?? THREE_SECONDS_AUTO_HIDE_DURATION;

	return (
		<SnackBarView
			{...{ snackBarProps, snackbarClose, defineAutoHideDuration }}
		/>
	);
};

export default SnackBar;
