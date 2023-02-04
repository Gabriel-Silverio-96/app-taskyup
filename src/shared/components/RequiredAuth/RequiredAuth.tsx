import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { IAuthState } from "shared/common/store/Auth/types/Auth.types";
import Drawer from "../Drawer";
import { Box } from "./style";
import { IRequiredAuth } from "./types/RequiredAuth.component";

const RequiredAuth: React.FC<IRequiredAuth> = ({ children, drawer = true }) => {
	const { isAuthenticated } = useSelector(
		(state: { auth: IAuthState }) => state.auth
	);

	if(isAuthenticated && drawer === false) {
		return (
			<Box component="section">
				{children}	
			</Box>
		);
	}

	return (
		<>
			{isAuthenticated && drawer ? (
				<Drawer>
					<Box component="section">
						{children}	
					</Box>
				</Drawer>
			) : (
				<Navigate to="/auth/signin" />
			)}
		</>
	);
};

export default memo(RequiredAuth);
