import React from "react";
import { useSelector } from "react-redux";
import useSnackBar from "shared/common/hook/useSnackBar";
import { ISnackBarState } from "shared/common/store/SnackBar/types/Snackbar.types";
import SnackBarView from "./SnackBarView";

const THREE_SECONDS_AUTO_HIDE_DURATION = 3000;

const SnackBar: React.FC = () => {
	const { snackBarClose } = useSnackBar();
	const snackBarProps = useSelector(
		(state: { snackBar: ISnackBarState }) => state.snackBar
	);

	const defineAutoHideDuration =
		snackBarProps.autoHideDuration ?? THREE_SECONDS_AUTO_HIDE_DURATION;

	return (
		<SnackBarView
			{...{ snackBarProps, snackBarClose, defineAutoHideDuration }}
		/>
	);
};

export default SnackBar;
