import SignUp from "modules/auth/SignUp";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "shared/components/RequiredAuth";
import SignIn from "./modules/auth/SignIn";
import Board from "./modules/dashboard/Board";

const MainRoutes:React.FC = () => {
	return (
		<Routes>
			<Route path="/auth/signin" element={<SignIn />} />
			<Route path="/auth/signup" element={<SignUp />} />

			<Route path="/dashboard" element={<RequiredAuth><Board /></RequiredAuth>} />
			<Route path="*" element={<h1>404</h1>} />				
		</Routes>
	);
};

export default MainRoutes;
