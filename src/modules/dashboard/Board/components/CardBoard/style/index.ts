import {
	
	CardContent as CardContentMui,
	styled,
} from "@mui/material/";
import { ICardBoardStyle } from "./types/CardBoard.style";

export const CardBoardContainer = styled("div")<ICardBoardStyle>(
	({ theme, backgroundimage }) => `
    
    .MuiPaper-root {
        border-radius: ${theme.spacing(1)};        
        background-image: ${backgroundimage && `linear-gradient(#000000bf, #000000bf), url(${backgroundimage})`};
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


