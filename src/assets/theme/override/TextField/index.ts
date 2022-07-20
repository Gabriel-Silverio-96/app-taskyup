import { Interpolation, Theme } from "@mui/system";
import { Components, createTheme } from "@mui/material";
const theme = createTheme();

const style: Interpolation<{ theme: Theme }> = {
	borderRadius: "0.3125rem",	
    
	"label": {
		color: theme.palette.grey[700],		
		fontWeight: "400",
		top: theme.spacing(0.3)
	},
	"input": {
		paddingTop: theme.spacing(1.3),
		paddingBottom: theme.spacing(1.3),	
	},
	"> p": {
		marginLeft: 0,
		":first-letter": {
			textTransform: "uppercase"
		}
	}
};

export const TextFieldOverride: Components = {
	MuiTextField: {
		variants: [
			{ props: { variant: "outlined" }, style },
		]
	}
};