import { ISnackbarProps } from "shared/common/hook/useSnackBar/types/useSnackBar.types";

export interface ISnackBarView {
    snackBarProps: ISnackbarProps;
    snackBarClose: () => void;
}