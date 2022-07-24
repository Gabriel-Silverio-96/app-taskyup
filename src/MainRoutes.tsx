import SignUp from "modules/auth/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequiredAuth from "shared/components/RequiredAuth";
import SignIn from "./modules/auth/SignIn";

const MainRoutes:React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/signin" element={<SignIn />} />
				<Route path="/auth/signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;