import { CssBaseline } from "@mui/material";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "shared/common/store";
import Layout from "shared/components/Layout";
import setupInterceptors from "shared/services/setupInterceptors";
import MainRoutes from "./MainRoutes";
import { ThemeProvider } from "./shared/common/context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const history = createBrowserHistory();
setupInterceptors(history, store);

root.render(
	<Provider store={store}>
		<ThemeProvider>
			<Layout>
				<CssBaseline />
				<MainRoutes />
			</Layout>
		</ThemeProvider>
	</Provider>
);