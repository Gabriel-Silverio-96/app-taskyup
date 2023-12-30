import { styled } from "@mui/material";

export const Header = styled("header")(
	({ theme }) => `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: ${theme.spacing(2)};
        border-style: solid;
        border-width: ${theme.spacing(0, 0, 0.05, 0)};
        border-color: ${theme.palette.grey[900]};
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
