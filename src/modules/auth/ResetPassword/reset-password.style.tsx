import { styled } from "@mui/material";

export interface ILinkStyle {
	disabled: boolean;
}

export const Footer = styled("footer")(
	({ theme }) => `
        a {
            text-decoration: none;
            color: ${theme.palette.grey[700]};                   
        }

        hr {
            width: 50%
        }
    `
);
