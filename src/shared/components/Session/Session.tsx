import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "shared/common/hook/useLocalStorage";
import { SIGNIN_TYPE } from "shared/common/store/Auth/Auth.reducer";
import { IAuthState } from "shared/common/store/Auth/types/Auth.types";
import { createAction } from "shared/common/store/store.action";
import api from "shared/services/api";
import SessionView from "./SessionView";
import { ISession } from "./types/Session.component";

const Session: React.FC<ISession> = ({ children }) => {
	const dispatch = useDispatch();
	const token: string | null = localStorage.getItem("@taskyup.token" || null);
	const userData: string | null = localStorage.getItem("@taskyup.user_data" || null);	

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
	const [accessLastPage, setAccessLastPage] = useLocalStorage("@taskyup.access_last_page", location.pathname);
	const { isAuthenticated } = useSelector((state: { auth: IAuthState }) => state.auth);	
	const navigate = useNavigate();	
	
	useEffect(() => {
		setAccessLastPage(location.pathname);
	}, [location]);
	
	useEffect(() => {
		if(isAuthenticated) {
			navigate(accessLastPage);
		}
	}, []);

	return <SessionView {...{ children }} />;
};

export default Session;
