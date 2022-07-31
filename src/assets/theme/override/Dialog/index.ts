import { Components } from "@mui/material";
import { Interpolation, Theme } from "@mui/system";

const style: Interpolation<{ theme: Theme }> = {
	".MuiPaper-root": {
		backgroundImage: "none",
	}	
};

export const DialogOverride: Components = {
	MuiDialog: {
		variants: [
			  { props: { }, style }
		]
	  },
};