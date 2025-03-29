import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import useLocalStorage from "shared/common/hooks/useLocalStorage";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import { IAuthState } from "shared/common/store/Auth/types/Auth.types";
import { createAction } from "shared/common/store/store.action";
import api from "shared/services/api";
import SessionView from "./SessionView";
import { ISession } from "./types/Session.component";

const Session: React.FC<ISession> = ({ children }) => {
	const [searchParams] = useSearchParams();
	const redirect = searchParams.get("redirect");

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

	const location = useLocation();
	const path = `${location.pathname}${location.search}`;

	const [lastPageAccessed, setLastPageAccessed] = useLocalStorage(
		"@taskyup.last_page_accessed",
		path
	);
	const { isAuthenticated } = useSelector(
		(state: { auth: IAuthState }) => state.auth
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (redirect === "false") return;

		setLastPageAccessed(path);
	}, [location]);

	useEffect(() => {
		if (redirect === "false") return;

		if (isAuthenticated) {
			navigate(lastPageAccessed);
		}
	}, []);

	return <SessionView {...{ children }} />;
};

export default Session;
