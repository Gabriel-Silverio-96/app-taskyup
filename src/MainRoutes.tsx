import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./modules/auth/SignIn";

const MainRoutes:React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/auth/signin" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;