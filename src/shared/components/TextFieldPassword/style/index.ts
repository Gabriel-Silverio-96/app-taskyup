import { styled, IconButton as IconButtonMui } from "@mui/material";

export const TextFieldPassword = styled("div")({
	position: "relative",

	".MuiFormControl-root .MuiFormHelperText-root": {
		whiteSpace: "pre-line"
	}
});

export const IconButton = styled(IconButtonMui)(
	({ theme }) => `
        position: absolute;
        right: ${theme.spacing(0.77)};
        top: ${theme.spacing(0.4)};
        color: ${theme.palette.grey[700]};
    `
);