import { styled } from "@mui/material";

export const BackgroundSignUp = styled("div")(
	({ theme }) => `
        background: linear-gradient(180deg, rgb(156 16 255 / 47%) -44%, rgba(0,0,0,0) 55%);        
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: ${theme.spacing(5)};        
    `
);

export const GridForm = styled("div")({
	width: "min(20rem, 100%)",
});

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
