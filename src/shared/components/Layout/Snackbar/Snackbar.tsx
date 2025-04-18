import React from "react";
import { useSelector } from "react-redux";
import useSnackbar from "shared/common/hooks/useSnackbar";
import type { ISnackbarState } from "shared/common/store/Snackbar/types";
import SnackbarView from "shared/components/Layout/Snackbar/SnackbarView";

const THREE_SECONDS_AUTO_HIDE_DURATION = 3000;

const Snackbar: React.FC = () => {
	const { snackbarClose } = useSnackbar();
	const snackbarProps = useSelector(
		(state: { snackbar: ISnackbarState }) => state.snackbar
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
