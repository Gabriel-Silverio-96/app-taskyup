import { styled } from "@mui/material";
import { Link as LinkRouterDom } from "react-router-dom";
import { ILinkStyle } from "./types";
    
export const Footer = styled("footer")(
	({ theme }) => `
        a {
            text-decoration: none;
            color: ${theme.palette.grey[700]};                   
        }

        hr {
            width: 50%
        }
    `,
);

export const Link = styled(LinkRouterDom)<ILinkStyle>(
	({ disabled }) => `
        pointer-events: ${disabled ? "none" : "auto"} 
    `
);
