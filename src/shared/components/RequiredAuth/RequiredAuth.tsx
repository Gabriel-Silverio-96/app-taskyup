import { Navigate } from "react-router-dom";
import { IRequiredAuth } from "./types/RequiredAuth.component";

const RequiredAuth: React.FC<IRequiredAuth> = ({ children }) => {
	const authenticated = false;
	return authenticated ? children : <Navigate to="/auth/signin" />;
};

export default RequiredAuth;