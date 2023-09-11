import { styled } from "@mui/material";

export const Header = styled("header")(
	({ theme }) => `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(3)};
    `
);

export const Nav = styled("nav")(
	({ theme }) => `
        z-index: 2;
        display: flex;
        alignItem: center;
        gap: ${theme.spacing(1)}; 
    `
);