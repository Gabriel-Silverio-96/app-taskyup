import { createTheme } from "@mui/material/styles";
import { ButtonOverride } from "./override";

const dark = createTheme({
	palette: {
		primary: {
			main: "#9C10FF",
			light: "#D28FFF",
			dark: "#780FC2"
		},
		secondary: {
			main: "#FFE210",
			light: "#FFFFF0",
			dark: "#FFB710"
		},
		background: {
			paper: "#1A191A",
			default: "#090909",
		},
	},
	components: {
		...ButtonOverride,	
	},
});

export default dark;