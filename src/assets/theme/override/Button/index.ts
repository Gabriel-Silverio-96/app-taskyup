import { Interpolation, Theme } from "@mui/system";
import { Components } from "@mui/material";

const style: Interpolation<{ theme: Theme }> = {
	borderRadius: "0.3125rem",
	textTransform: "capitalize",
	fontWeight: "400",
	fontSize: "0.9rem",
	boxShadow: "none",
	padding: "9px 16px",
	
	":focus": {
		boxShadow: "none",		
	}
};

export const ButtonOverride: Components = {
	MuiButton: {
		variants: [
			  { props: { variant: "contained" }, style },
			  { props: { variant: "text" }, style },
			  { props: { variant: "outlined" }, style }
		]
	  },
};