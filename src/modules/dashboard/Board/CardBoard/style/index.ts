import { Menu as MenuMui, styled } from "@mui/material";
import { ICardBoardStyle } from "./types/CardBoard.style";

export const CardBoardContainer = styled("div")<ICardBoardStyle>(
	({ theme, backgroundimage }) => `
    
    .MuiPaper-root {
        border-radius: ${theme.spacing(1)};        
        background-image: ${backgroundimage && `linear-gradient(#000000bf, #000000bf), url(${backgroundimage})`};
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

export const CardIcon = styled("div")(
	({ theme }) => `
        display: flex;
        align-item: center;
        gap: ${theme.spacing(1)}; 
        text-transform: capitalize
    `
);

export const CardHeader = styled("div")({
	display: "flex",
	alignItem: "center",
	justifyContent: "space-between",
});

export const Menu = styled(MenuMui)(
	({ theme }) => `    
    
    .MuiPaper-root {
        width: ${theme.spacing(15)};
        border-radius: ${theme.spacing(1)};
        box-shadow: none;
        background: ${theme.palette.background.paper};
    }

        ul > li {
            font-size: ${theme.typography.caption.fontSize};
            padding-bottom: ${theme.spacing(0.5)};

            > svg {
                margin-right: ${theme.spacing(1)};
            }
        }
    `
);
