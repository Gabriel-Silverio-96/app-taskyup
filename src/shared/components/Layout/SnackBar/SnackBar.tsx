import React from "react";
import { useSelector } from "react-redux";
import useSnackBar from "shared/common/hook/useSnackBar";
import { ISnackbarAction } from "shared/common/store/SnackBar/types/Snackbar.types";
import SnackBarView from "./SnackBarView";

const SnackBar: React.FC = () => {
	const { snackBarClose } = useSnackBar();
	const snackBarProps = useSelector((state: { snackBar: ISnackbarAction }) => state.snackBar);	

	return <SnackBarView {...{ snackBarProps, snackBarClose }} />;
};

export default SnackBar;