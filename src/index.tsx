import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "shared/common/store";
import MainRoutes from "./MainRoutes";
import { ThemeProvider } from "./shared/common/context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<Provider store={store}>
		<ThemeProvider>
			<CssBaseline />
			<MainRoutes />
		</ThemeProvider>
	</Provider>
);