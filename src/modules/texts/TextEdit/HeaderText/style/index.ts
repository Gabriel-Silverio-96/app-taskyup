import { styled, Menu as MenuMui } from "@mui/material";

export const Nav = styled("nav")(    
	({ theme }) => `
        display: flex;
        gap: ${theme.spacing(1)};
        justify-content: flex-end;
        
        button:last-child {
            padding: 5px 0;
            min-width: 40px;                
            min-height: ${theme.spacing(4.5)};
        }
    `
);

export const TextField = styled("input")(
	({ theme }) => `
        font-family: ${theme.typography.fontFamily};
        font-weight: 800;
        font-size: 1.25rem;
        color: white;
        background: transparent;
        border: 1px solid transparent;        
        padding: 0.5rem 0.8rem;
        transition: .3s;

        :hover {
            border-color: ${theme.palette.grey[700]};
        }
    `
);