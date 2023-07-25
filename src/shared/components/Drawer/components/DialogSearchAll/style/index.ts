import { styled } from "@mui/material";

export const TextFieldWithIconButton = styled("div")(
	({ theme }) => `
        .MuiFormControl-root  {
            width: 100%;
        }

        > input {
            position: relative;
        }
        
        > button {
            position: absolute;
            right: ${theme.spacing(2.5)};
            bottom: ${theme.spacing(3)};
        }
    `
);