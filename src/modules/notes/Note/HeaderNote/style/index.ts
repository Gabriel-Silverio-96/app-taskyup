import { styled } from "@mui/material";

export const Nav = styled("nav")(    
	({ theme }) => `
        display: flex;
        gap: ${theme.spacing(1)};
        justify-content: flex-end;
        
        button {
            padding: 5px 0;
            min-width: 40px;                
            min-height: ${theme.spacing(4.5)};
        }
    `
);
