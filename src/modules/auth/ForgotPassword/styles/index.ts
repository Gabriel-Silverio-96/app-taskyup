import { styled } from "@mui/material";
import { Link as LinkRouterDom } from "react-router-dom";
import { ILinkStyle } from "./types";
    
export const Title = styled("div")(
	({ theme }) => `
        margin: ${theme.spacing(8, 0, 5)};
        p {
            margin: 0;
            color: ${theme.palette.grey[700]}
        }
    `   
);

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
	({ isLoading }) => `
        pointer-events: ${isLoading ? "none" : "auto"} 
    `
);
