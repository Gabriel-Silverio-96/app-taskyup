import ResetPassword from "modules/auth/ResetPassword";
import SignUp from "modules/auth/SignUp";
import Note from "modules/notes/Note";
import Profile from "modules/account/Profile";
import { Route, Routes, Navigate  } from "react-router-dom";
import RequiredAuth from "shared/components/RequiredAuth";
import ForgotPassword from "./modules/auth/ForgotPassword";
import SignIn from "./modules/auth/SignIn";
import Board from "./modules/dashboard/Board";
import Page404 from "modules/error/Page404";
import Text from "modules/texts/Text";
import TextEdit from "modules/texts/TextEdit";

const MainRoutes:React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to="/auth/signin" />} />
			<Route path="/auth/signin" element={<SignIn />} />
			<Route path="/auth/signup" element={<SignUp />} />
			<Route path="/auth/forgot-password" element={<ForgotPassword />} />
			<Route path="/auth/reset-password/:token" element={<ResetPassword />} />

			<Route path="/profile" element={<RequiredAuth><Profile /></RequiredAuth>} />

			<Route path="/dashboard" element={<RequiredAuth><Board /></RequiredAuth>} />
			<Route path="/notes/:board_id" element={<RequiredAuth><Note /></RequiredAuth>} />				
			<Route path="/texts/:board_id" element={<RequiredAuth><Text /></RequiredAuth>} />				
			<Route path="/text/edit/:text_id" element={<RequiredAuth><TextEdit /></RequiredAuth>} />				

			<Route path="*" element={<Page404 />} />
		</Routes>
	);
};

export default MainRoutes;
