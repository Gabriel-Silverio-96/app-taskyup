import { ISnackBarAction, ISnackBarState } from "./types/Snackbar.types";

const INITIAL_STATE: ISnackBarState = {
	open: false,
	message: "",
	severety: "success"
};

export default function (state = INITIAL_STATE, action: ISnackBarAction) {
	const { payload, type } = action;
	switch (type) {
	case "SNACKBAR_OPEN":
		return payload;
	default:
		return state;
	}
}