import { IconButton as IconButtonMui, styled } from "@mui/material";
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

export const TextFieldPassword = styled("div")({
	position: "relative"
});

export const IconButton = styled(IconButtonMui)(
	({ theme }) => `
        position: absolute;
        right: ${theme.spacing(0.77)};
        top: ${theme.spacing(0.4)};
        color: ${theme.palette.grey[700]};
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
	({ disabled }) => `
        pointer-events: ${disabled ? "none" : "auto"} 
    `
);
