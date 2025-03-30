import { memo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { IAuthState } from "shared/common/store/Auth/types";
import Drawer from "shared/components/Drawer";
import { Box } from "shared/components/RequiredAuth/required-auth.style";
import type { IRequiredAuth } from "shared/components/RequiredAuth/types";

const RequiredAuth: React.FC<IRequiredAuth> = ({ children, drawer = true }) => {
	const { isAuthenticated } = useSelector(
		(state: { auth: IAuthState }) => state.auth
	);

	if (isAuthenticated && drawer === false) {
		return <Box component="section">{children}</Box>;
	}

	return (
		<>
			{isAuthenticated && drawer ? (
				<Drawer>
					<Box component="section">{children}</Box>
				</Drawer>
			) : (
				<Navigate to="/auth/signin" />
			)}
		</>
	);
};

export default memo(RequiredAuth);
