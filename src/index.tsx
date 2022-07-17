import { ThemeProvider } from "./common/context/ThemeContext";
import ReactDOM from "react-dom/client";
import MainRoutes from "./MainRoutes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<ThemeProvider>
		<MainRoutes />
	</ThemeProvider>
);