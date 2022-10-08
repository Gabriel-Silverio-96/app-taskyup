import { AlertColor } from "@mui/material";
import { AxiosResponse } from "axios";
import { Store } from "redux";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import { SNACKBAR_OPEN_TYPE } from "shared/common/store/SnackBar/SnackBar.reducer";
import { createAction } from "shared/common/store/store.action";
import { IFetchResponseDefault } from "shared/common/types/Fetch";
import api from "./api";

const setupInterceptors = (store: Store) => {	
	const snackbarStoreAction = (message: string, severity: AlertColor) => {
		store.dispatch(createAction(SNACKBAR_OPEN_TYPE, { open: true, message, severity }));
	};
	api.interceptors.response.use(response => {
		const { status, data } = response as AxiosResponse<IFetchResponseDefault>;        
		if (data.type_message || data.message) {
			switch (status) {
			case 200:
				snackbarStoreAction(data.message, "success");
				break;

			case 201:
				snackbarStoreAction(data.message, "success");
				break;

			default:
				break;
			}
		}
		return response;
	}, error => {
		const unexpectedErrorMessage = "An unexpected error has occurred, please try again later";
		if (error.response === undefined) snackbarStoreAction(unexpectedErrorMessage, "error");			
		
		const { status, data } = error.response as AxiosResponse<IFetchResponseDefault>;		
		switch (status) {
		case 401:
			snackbarStoreAction(data.message, "info");			
			store.dispatch(createAction(SIGNIN_TYPE, { isAuthenticated: false, user_data: {} }));
			api.defaults.headers.common["Authorization"] = "";            
			localStorage.removeItem("@taskyup.token");
			localStorage.removeItem("@taskyup.user_data");			
			break;

		case 403:
			snackbarStoreAction(data.message, "warning");			
			break;

		case 404:
			snackbarStoreAction(data.message, "error");			
			break;
        
		case 429:
			snackbarStoreAction(data.message, "info");			
			break;

		case 500:
			snackbarStoreAction(data.message, "error");			
			break;

		default:
			snackbarStoreAction(unexpectedErrorMessage, "error");
			break;
		}

		return Promise.reject(error);
	});
};

export default setupInterceptors;