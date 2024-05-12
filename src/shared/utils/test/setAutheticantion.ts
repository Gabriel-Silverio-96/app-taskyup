import { Store } from "redux";
import { createAction } from "shared/common/store/store.action";

interface ISetAuthentication {
    store: Store;
    actionType: string;
    isAuthenticated: boolean;
    user_data: {
        full_name: string;
    }
}

const setAuthentication = ({ store, actionType, isAuthenticated, user_data }: ISetAuthentication) => {
	store.dispatch(
		createAction(actionType, {
			isAuthenticated,
			user_data,
		})
	);
};

export default setAuthentication;