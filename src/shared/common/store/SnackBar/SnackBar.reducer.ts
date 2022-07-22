import { ISnackBarAction, ISnackBarState } from "./types/Snackbar.types";

export const SNACKBAR_OPEN_TYPE = "SNACKBAR_OPEN";
export const SNACKBAR_CLOSE_TYPE = "SNACKBAR_CLOSE";

const INITIAL_STATE: ISnackBarState = {
	open: false,
	message: "",
	severety: "success"
};

export default function (state = INITIAL_STATE, action: ISnackBarAction) {
	const { payload, type } = action;
	switch (type) {
	case SNACKBAR_OPEN_TYPE:
		return payload;	

	case SNACKBAR_CLOSE_TYPE:
		return INITIAL_STATE;

	default:
		return state;
	}
}