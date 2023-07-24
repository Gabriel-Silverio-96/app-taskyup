import { createStore, combineReducers } from "redux";
import snackBar from "./SnackBar/SnackBar.reducer";
import auth from "./Auth/Auth.reducer";
import dialogSearchAll from "./DialogSearchAll/DialogSearchAll.reduce";

const rootReducer = combineReducers({
	snackBar,
	auth,
	dialogSearchAll
});

export const store = createStore(rootReducer);