import { CssBaseline } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import GlobalStylesMui from "assets/theme/override/GlobalStyles";
import "bytemd/dist/index.css";
import "highlight.js/styles/default.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "shared/common/store";
import Layout from "shared/components/Layout";
import Session from "shared/components/Session";
import queryClient from "infra/queryClient";
import setupInterceptors from "infra/setupInterceptors";
import MainRoutes from "./MainRoutes";
import { ThemeContextProvider } from "./shared/common/Context/ThemeContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
setupInterceptors(store);

root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<ThemeContextProvider>
				<BrowserRouter>
					<Session>
						<Layout>
							<CssBaseline />
							<GlobalStylesMui />
							<MainRoutes />
						</Layout>
					</Session>
				</BrowserRouter>
			</ThemeContextProvider>
		</QueryClientProvider>
	</Provider>
);
