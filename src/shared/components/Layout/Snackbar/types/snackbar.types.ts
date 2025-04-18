import { ISnackbarProps } from "shared/common/hooks/useSnackbar/types";
import { FunctionReturnsVoid } from "shared/common/types";

export interface ISnackbarView {
	snackbarProps: ISnackbarProps;
	snackbarClose: FunctionReturnsVoid;
	defineAutoHideDuration: number;
}
