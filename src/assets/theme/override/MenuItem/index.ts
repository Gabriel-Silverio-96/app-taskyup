import { Components, createTheme } from "@mui/material";
import { Interpolation, Theme } from "@mui/system";
const theme = createTheme();

const style: Interpolation<{ theme: Theme }> = {
	fontSize: theme.typography.subtitle2.fontSize
};

export const MenuItemOverride: Components = {
	MuiMenuItem: {
		variants: [
			  { props: { }, style },
		]
	  },
};