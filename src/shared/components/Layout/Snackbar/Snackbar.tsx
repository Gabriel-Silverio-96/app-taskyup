import React from "react";
import { useSelector } from "react-redux";
import useSnackbar from "shared/common/hook/useSnackbar";
import { ISnackBarState } from "shared/common/store/SnackBar/types/Snackbar.types";
import SnackbarView from "./SnackbarView";

const THREE_SECONDS_AUTO_HIDE_DURATION = 3000;

const Snackbar: React.FC = () => {
	const { snackbarClose } = useSnackbar();
	const snackbarProps = useSelector(
		(state: { snackBar: ISnackBarState }) => state.snackBar
	);

	const defineAutoHideDuration =
		snackbarProps.autoHideDuration ?? THREE_SECONDS_AUTO_HIDE_DURATION;

	return (
		<SnackbarView
			{...{ snackbarProps, snackbarClose, defineAutoHideDuration }}
		/>
	);
};

export default Snackbar;
