import { createTheme } from "@mui/material/styles";

const light = createTheme({
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
	}
});

export default light;