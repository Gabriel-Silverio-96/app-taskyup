import { styled } from "@mui/material";

export const Nav = styled("nav")(    
	({ theme }) => `
        display: flex;
        gap: ${theme.spacing(1)};
        justify-content: flex-end;
    `
);