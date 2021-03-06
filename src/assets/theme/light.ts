import { createTheme } from "@mui/material/styles";
import { ButtonOverride } from "./override";
import { TextFieldOverride } from "./override/TextField";

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
	},
	components: {
		...ButtonOverride,
		...TextFieldOverride,	
	},
});

export default light;