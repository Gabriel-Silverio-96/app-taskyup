import { Components } from "@mui/material";
import { Interpolation, Theme } from "@mui/system";

const style: Interpolation<{ theme: Theme }> = {
	padding: "1.5rem"	
};

export const DialogActionOverride: Components = {
	MuiDialogActions: {
		variants: [
			  { props: { }, style }
		]
	  },
};