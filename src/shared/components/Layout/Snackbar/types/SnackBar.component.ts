import { ISnackbarProps } from "shared/common/hook/useSnackbar/types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface ISnackBarView {
	snackBarProps: ISnackbarProps;
	snackbarClose: FunctionReturnsVoid;
	defineAutoHideDuration: number;
}
