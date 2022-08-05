import { CssBaseline } from "@mui/material";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "shared/common/store";
import Layout from "shared/components/Layout";
import Session from "shared/components/Session";
import setupInterceptors from "shared/services/setupInterceptors";
import MainRoutes from "./MainRoutes";
import { ThemeProvider } from "./shared/common/context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const history = createBrowserHistory();
setupInterceptors(history, store);
const queryClient = new QueryClient();

root.render(
	<Provider store={store}>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<BrowserRouter>
					<Session>
						<Layout>
							<CssBaseline />
							<MainRoutes />
						</Layout>
					</Session>
				</BrowserRouter>
			</ThemeProvider>
		</QueryClientProvider>
	</Provider>
);
