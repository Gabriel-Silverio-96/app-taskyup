import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IAuthState } from "shared/common/store/Auth/types/Auth.types";
import Drawer from "../Drawer";
import { IRequiredAuth } from "./types/RequiredAuth.component";

const RequiredAuth: React.FC<IRequiredAuth> = ({ children }) => {
	const { isAuthenticated } = useSelector((state: { auth: IAuthState }) => state.auth);
	return (
		<>
			{isAuthenticated ? (
				<Drawer>
					{children}
				</Drawer>
			) : <Navigate to="/auth/signin" />}
		</>
	);
};

export default memo(RequiredAuth);