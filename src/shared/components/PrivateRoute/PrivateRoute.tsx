import { Navigate } from "react-router-dom";
import { IRouteCustom } from "./types/PrivateRoute.component";

const PrivateRoute:React.FC<IRouteCustom> = ({ children }) => {
	const authenticated = false;
	return authenticated ? children : <Navigate to="/auth/signin" />;
};

export default PrivateRoute;