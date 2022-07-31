import { Components, createTheme } from "@mui/material";
import { Interpolation, Theme } from "@mui/system";
const theme = createTheme();

const style: Interpolation<{ theme: Theme }> = {
	paddingTop: theme.spacing(0.5),
	paddingBottom: theme.spacing(0.5),
};

export const SelectOverride: Components = {
	MuiSelect: {
		variants: [
			  { props: { size: "small" }, style }
		]
	  },
};