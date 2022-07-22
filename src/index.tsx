import { ThemeProvider } from "./shared/common/context/ThemeContext";
import ReactDOM from "react-dom/client";
import MainRoutes from "./MainRoutes";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<ThemeProvider>
		<CssBaseline />
		<MainRoutes />
	</ThemeProvider>
);