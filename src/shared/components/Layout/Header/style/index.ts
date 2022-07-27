import { styled } from "@mui/material";

export const Header = styled("header")(
	({ theme }) => `
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: ${theme.spacing(2)};
    `
);