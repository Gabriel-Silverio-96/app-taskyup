import { AxiosResponse } from "axios";
import { BrowserHistory } from "history";
import { Store } from "redux";
import { SNACKBAR_OPEN_TYPE } from "shared/common/store/SnackBar/SnackBar.reducer";
import { createAction } from "shared/common/store/store.action";
import api from "./api";

const setupInterceptors = (history: BrowserHistory, store: Store) => {
	api.interceptors.response.use(response => {
		const { status, data } = response;        
		if (data.type_message || data.message) {
			switch (status) {
			case 200:
				store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
					{ open: true, message: data.message, severity: "success" }
				));
				break;

			case 201:
				store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
					{ open: true, message: data.message, severity: "success" }
				));
				break;

			default:
				break;
			}
		}
		return response;
	}, error => {
		const unexpectedErrorMessage = "An unexpected error has occurred, please try again later";
		if (error.response === undefined) {
			store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
				{ open: true, message: unexpectedErrorMessage, severity: "error" }
			));
		}
		const { status, data } = error.response as AxiosResponse<any>;
		switch (status) {
		case 401:
			store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
				{ open: true, message: data.message, severity: "info" }
			));
			api.defaults.headers.common["Authorization"] = "";            
			localStorage.removeItem("@taskyup.token");
			history.push("/auth/sigin");
			break;

		case 403:
			store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
				{ open: true, message: data.message, severity: "warning" }
			));
			break;

		case 404:
			store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
				{ open: true, message: data.message, severity: "error" }
			));
			break;
        
		case 429:
			store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
				{ open: true, message: data.message, severity: "info" }
			));
			break;

		case 500:
			store.dispatch(createAction(SNACKBAR_OPEN_TYPE,
				{ open: true, message: data.message, severity: "error" }
			));
			break;

		default:
			break;
		}

		return Promise.reject(error);
	});
};

export default setupInterceptors;