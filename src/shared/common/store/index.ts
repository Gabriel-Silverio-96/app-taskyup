import { createStore, combineReducers } from "redux";
import snackbar from "./Snackbar/Snackbar.reducer";
import auth from "./Auth/Auth.reducer";
import dialogSearchAll from "./DialogSearchAll/DialogSearchAll.reduce";

const rootReducer = combineReducers({
	snackbar,
	auth,
	dialogSearchAll,
});

export const store = createStore(rootReducer);
