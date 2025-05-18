import { CardContent as CardContentMui, styled } from "@mui/material/";

export interface ICardBoardStyle {
	backgroundImage: string;
}

const defineBackgroundImage = (backgroundImage: string) =>
	backgroundImage &&
	`linear-gradient(#000000bf, #000000bf), url(${backgroundImage})`;

export const CardBoardContainer = styled("div", {
	shouldForwardProp: prop => prop !== "backgroundImage",
})<ICardBoardStyle>(
	({ theme, backgroundImage }) => `
    
    .MuiPaper-root {
        border-radius: ${theme.spacing(1)};        
        background-image: ${defineBackgroundImage(backgroundImage)};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        :hover {
            transition: .3s;
            border: 1px solid ${theme.palette.primary.main};
        }
    }

    a {
        color: ${theme.palette.text.primary}
    }
`
);

export const CardContent = styled(CardContentMui)(
	() => `
        a {
            h6 {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    `
);
