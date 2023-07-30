export type TypeDialogSearchAll = "OPEN_DIALOG_SEARCH_ALL_TYPE" | "CLOSE_DIALOG_SEARCH_ALL_TYPE";

export interface IDialogSearchAllState {
    open: boolean;
}

export interface IDialogSearchAllAction {
    type: TypeDialogSearchAll;
    payload: IDialogSearchAllState;
}