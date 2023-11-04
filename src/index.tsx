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
import queryClient from "shared/services/queryClient";
import setupInterceptors from "shared/services/setupInterceptors";
import MainRoutes from "./MainRoutes";
import { ThemeProvider } from "./shared/common/context/ThemeContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
setupInterceptors(store);

root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<BrowserRouter>
					<Session>
						<Layout>
							<CssBaseline />
							<GlobalStylesMui />
							<MainRoutes />
						</Layout>
					</Session>
				</BrowserRouter>
			</ThemeProvider>
		</QueryClientProvider>
	</Provider>
);
