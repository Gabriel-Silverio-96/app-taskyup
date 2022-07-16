import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRoutes:React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Teste</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRoutes;