import ResetPassword from "modules/auth/ResetPassword";
import SignUp from "modules/auth/SignUp";
import Note from "modules/notes/Note";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "shared/components/RequiredAuth";
import ForgotPassword from "./modules/auth/ForgotPassword";
import SignIn from "./modules/auth/SignIn";
import Board from "./modules/dashboard/Board";

const MainRoutes:React.FC = () => {
	return (
		<Routes>
			<Route path="/auth/signin" element={<SignIn />} />
			<Route path="/auth/signup" element={<SignUp />} />
			<Route path="/auth/forgot-password" element={<ForgotPassword />} />
			<Route path="/auth/reset-password/:token" element={<ResetPassword />} />

			<Route path="/dashboard" element={<RequiredAuth><Board /></RequiredAuth>} />
			<Route path="/notes/:board_id" element={<RequiredAuth><Note /></RequiredAuth>} />				

			<Route path="*" element={<h1>404</h1>} />
		</Routes>
	);
};

export default MainRoutes;
