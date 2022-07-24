import { IAuthAction, IAuthState } from "./types/Auth.types";

export const SIGNIN_TYPE = "SIGNIN_TYPE";
export const LOGOUT_TYPE = "LOGOUT_TYPE";

const user_data: string | null = localStorage.getItem(("@taskyup.user_data") || null);
const token = localStorage.getItem("@taskyup.token");

const INITIAL_STATE: IAuthState = {
	isAuthenticated: token ? true : false,
	user_data: user_data ? JSON.parse(user_data) : {},
};

export default function (state = INITIAL_STATE, action: IAuthAction) {
	const { payload, type } = action;
	switch (type) {
	case SIGNIN_TYPE:
		return payload;

	case LOGOUT_TYPE:
		localStorage.removeItem("@taskyup.token");
		localStorage.removeItem("@taskyup.user_data");
		return INITIAL_STATE;

	default:
		return state;
	}
}