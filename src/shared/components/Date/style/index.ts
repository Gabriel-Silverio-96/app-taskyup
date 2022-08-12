import { styled } from "@mui/system";

export const DateInput = styled("input")(
	({ theme }) => `
        background: transparent;
        border: none;
        color: GrayText;
        font-size: ${theme.spacing(1.5)};
        padding: 0;
        margin: 0;
        
        :disabled {
            background: transparent;
            border: none;
        }
    `
);