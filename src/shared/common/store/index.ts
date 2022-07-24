import { createStore, combineReducers } from "redux";
import snackBar from "./SnackBar/SnackBar.reducer";
import auth from "./Auth/Auth.reducer";

const rootReducer = combineReducers({
	snackBar,
	auth
});

export const store = createStore(rootReducer);