import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IAuthState } from "shared/common/store/Auth/types/Auth.types";
import { IRequiredAuth } from "./types/RequiredAuth.component";

const RequiredAuth: React.FC<IRequiredAuth> = ({ children }) => {
	const { isAuthenticated } = useSelector((state: { auth: IAuthState }) => state.auth);
	return isAuthenticated ? children : <Navigate to="/auth/signin" />;
};

export default memo(RequiredAuth);