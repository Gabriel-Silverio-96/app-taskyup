import type { IDialogSearchAllAction, IDialogSearchAllState } from "shared/common/store/DialogSearchAll/types";

export const OPEN_DIALOG_SEARCH_ALL_TYPE = "OPEN_DIALOG_SEARCH_ALL_TYPE";
export const CLOSE_DIALOG_SEARCH_ALL_TYPE = "CLOSE_DIALOG_SEARCH_ALL_TYPE";

const INITIAL_STATE: IDialogSearchAllState = {
	open: false,
};

export default function (state = INITIAL_STATE, action: IDialogSearchAllAction) {
	const { payload, type } = action;
	switch (type) {
	case OPEN_DIALOG_SEARCH_ALL_TYPE:
		return payload;	

	case CLOSE_DIALOG_SEARCH_ALL_TYPE:
		return INITIAL_STATE;

	default:
		return state;
	}
}