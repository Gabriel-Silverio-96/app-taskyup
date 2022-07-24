import React from "react";
import { useSelector } from "react-redux";
import useSnackBar from "shared/common/hook/useSnackBar";
import { ISnackBarState } from "shared/common/store/SnackBar/types/Snackbar.types";
import SnackBarView from "./SnackBarView";

const SnackBar: React.FC = () => {
	const { snackBarClose } = useSnackBar();
	const snackBarProps = useSelector((state: { snackBar: ISnackBarState }) => state.snackBar);	

	return <SnackBarView {...{ snackBarProps, snackBarClose }} />;
};

export default SnackBar;