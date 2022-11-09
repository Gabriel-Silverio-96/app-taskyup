import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import {
	render as renderTestLibrary,
	RenderResult,
} from "@testing-library/react";
import GlobalStylesMui from "assets/theme/override/GlobalStyles";
import { Provider } from "react-redux";
import { Navigator, Route, Router, Routes } from "react-router-dom";
import { ThemeProvider } from "shared/common/context/ThemeContext";
import { store } from "shared/common/store";
import Layout from "shared/components/Layout";
import Session from "shared/components/Session";
import queryClient from "shared/services/queryClient";
import { createMemoryHistory, MemoryHistory } from "history";

interface IRenderRoutePathOption {
	path: string;
	location: Partial<Location> | string;
	history: Navigator;
}

const renderRoutePath = (
	ui: React.ReactElement,
	{ path, location, history }: IRenderRoutePathOption
): RenderResult => {
	return renderTestLibrary(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<Router location={location} navigator={history}>
						<Session>
							<Layout>
								<CssBaseline />
								<GlobalStylesMui />
								<Routes>
									<Route path={path} element={ui} />
								</Routes>
							</Layout>
						</Session>
					</Router>
				</ThemeProvider>
			</QueryClientProvider>
		</Provider>
	);
};

interface IRoutePathTest {
	route: string;
}

const routePathTest = ({ route }: IRoutePathTest): MemoryHistory => {
	const history = createMemoryHistory();
	history.push(route);

	return history;
};

export { renderRoutePath, routePathTest };
