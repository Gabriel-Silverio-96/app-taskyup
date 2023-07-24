export const OPEN_DIALOG_SEARCH_ALL_TYPE = "OPEN_DIALOG_SEARCH_ALL_TYPE";
export const CLOSE_DIALOG_SEARCH_ALL_TYPE = "CLOSE_DIALOG_SEARCH_ALL_TYPE";

const INITIAL_STATE: any = {
	open: false,
};

export default function (state = INITIAL_STATE, action: any) {
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