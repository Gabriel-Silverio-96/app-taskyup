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
            position: sticky;
            left: ${theme.spacing(102)};
            bottom: ${theme.spacing(115)};
        }
    `
);