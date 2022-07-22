import { ISnackbarProps } from "shared/common/hook/useSnackBar/types/UseSnackBar.types";

export interface ISnackBarView {
    snackBarProps: ISnackbarProps;
    snackBarClose: () => void;
}