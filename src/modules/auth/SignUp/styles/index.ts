import { styled } from "@mui/material";
import Background from "assets/img/background/background-signup.jpg";

export const BackgroundSignUp = styled("div")(
	({ theme }) => `
        background-image: linear-gradient(90deg, #090909, #0909092b), url(${Background});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: ${theme.spacing(5)};
    `
);

export const GridForm = styled("div")({
	width: "min(20rem, 100%)"
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
    `,
);
