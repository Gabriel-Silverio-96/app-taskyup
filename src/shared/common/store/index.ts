import { createStore, combineReducers } from "redux";
import snackBar from "./SnackBar/SnackBar.reducer";

const rootReducer = combineReducers({
	snackBar,
});

export const store = createStore(rootReducer);