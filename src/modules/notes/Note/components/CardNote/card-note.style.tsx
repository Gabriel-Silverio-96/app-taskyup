import {
	Card as CardMui,
	CardContent as CardContentMui,
	styled,
	Theme,
} from "@mui/material";
import { VIEW_MODE } from "shared/constants";
import { ViewMode } from "shared/common/types";

export interface ICardNoteContainerStyle {
	viewmode: ViewMode;
}

export interface ICardDotStyle {
	theme?: Theme;
	color: string;
}

export interface ICardEmojiStyle {
	theme?: Theme;
	src: string;
}

const defineHeightCard = (viewmode: string, theme: Theme) =>
	viewmode === VIEW_MODE.GRID ? theme.spacing(17.5) : theme.spacing(6);

export const CardNoteContainer = styled("div")<ICardNoteContainerStyle>(
	({ theme, viewmode }) => `
        .MuiPaper-root {
            height: ${defineHeightCard(viewmode, theme)};

            :hover {
                #card-action {
                    opacity: 1;
                }
            }
        }    

        .view-mode-list {
            > div {
                padding: ${theme.spacing(1.3)};
                grid-template-columns: ${theme.spacing(60, 60, "1fr")} ;
                align-items: center;
            }
            
            .card-footer {
                margin-top: ${theme.spacing(0.05)};
            }

            p {
                margin-top: 0;
                -webkit-line-clamp: 1;
            }
        }
`
);

export const Card = styled(CardMui)(
	({ theme }) => `
        position: relative;
        border-radius: ${theme.spacing(1)} ${theme.spacing(1)};
`
);

export const CardHeader = styled("div")(
	({ theme }) => `
        display: grid;
        grid-template-columns: ${theme.spacing(2)} 1fr;
        align-items: center;
        gap: ${theme.spacing(1)};
`
);

export const CardContent = styled(CardContentMui)(
	({ theme }) => `
        display: grid;
        grid-template-rows: ${theme.spacing(3.75)} ${theme.spacing(5.9)};

        p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            width: ${theme.spacing(22)}
        }

        .MuiTypography-body1 {
            -webkit-line-clamp: 1;
        }

        p:nth-of-type(2) {
            width: ${theme.spacing(26)};
        }
`
);

const defineBackgroundColor = (theme: Theme) =>
	theme.palette.mode === "dark"
		? theme.palette.grey[900]
		: theme.palette.grey[50];

export const CardAction = styled("div")(
	({ theme }) => `
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255, 0, 0, 0) 0%, 
            ${defineBackgroundColor(theme)} 100%);
        opacity: 0;
        transition: .3s;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        justify-content: end;
        padding: ${theme.spacing(1)} ${theme.spacing(0.5)};
`
);
