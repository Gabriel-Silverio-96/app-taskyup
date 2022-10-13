import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import {
	render as renderTestLibrary, RenderOptions, RenderResult
} from "@testing-library/react";
import GlobalStylesMui from "assets/theme/override/GlobalStyles";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "shared/common/context/ThemeContext";
import { store } from "shared/common/store";
import Layout from "shared/components/Layout";
import Session from "shared/components/Session";
import queryClient from "shared/services/queryClient";
import setupInterceptors from "shared/services/setupInterceptors";

setupInterceptors(store);

const render = (
	ui: React.ReactElement,
	option?: Omit<RenderOptions, "queries">
): RenderResult => {
	return renderTestLibrary(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<BrowserRouter>
						<Session>
							<Layout>
								<CssBaseline />
								<GlobalStylesMui />
								{ui}
							</Layout>
						</Session>
					</BrowserRouter>
				</ThemeProvider>
			</QueryClientProvider>
		</Provider>,
		option
	);
};

export default render;
