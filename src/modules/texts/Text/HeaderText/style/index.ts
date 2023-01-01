import { styled, Menu as MenuMui } from "@mui/material";

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

export const Menu = styled(MenuMui)(
	({ theme }) => `
        .MuiPaper-root {
            background: ${theme.palette.background.paper};
        }
    `
);
