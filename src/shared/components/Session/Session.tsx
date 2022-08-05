import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import { createAction } from "shared/common/store/store.action";
import api from "shared/services/api";
import SessionView from "./SessionView";
import { ISession } from "./types/Session.component";

const Session: React.FC<ISession> = ({ children }) => {
	const dispatch = useDispatch();
	const token: string | null = localStorage.getItem("@taskyup.token" || null);
	const userData: string | null = localStorage.getItem(
		"@taskyup.user_data" || null
	);

	useLayoutEffect(() => {
		if (token && userData) {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			dispatch(
				createAction(SIGNIN_TYPE, {
					isAuthenticated: true,
					user_data: JSON.parse(userData),
				})
			);
		}
	}, []);

	return <SessionView {...{ children }} />;
};

export default Session;
