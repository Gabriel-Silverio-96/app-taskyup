import { ISnackbarProps } from "shared/common/hook/useSnackBar/types/useSnackBar.types";
import { FunctionReturnsVoid } from "shared/common/types/AppTypes";

export interface ISnackBarView {
	snackBarProps: ISnackbarProps;
	snackBarClose: FunctionReturnsVoid;
	defineAutoHideDuration: number;
}
