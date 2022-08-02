import { createTheme } from "@mui/material/styles";
import { ButtonOverride } from "./override";
import { DialogOverride } from "./override/Dialog";
import { DialogActionOverride } from "./override/DialogAction";
import { SelectOverride } from "./override/Select";
import { TextFieldOverride } from "./override/TextField";

const dark = createTheme({
	typography: {
		fontFamily: ["Inter"].join(",")
	},
	palette: {
		mode: "dark",
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
		...TextFieldOverride,
		...DialogOverride,
		...SelectOverride,
		...DialogActionOverride,
	},
});

export default dark;