import { Card as CardMui, CardContent as CardContentMui, styled } from "@mui/material";
import { ICardDotStyle } from "./types/CardNote.style";

export const CardNoteContainer = styled("div")(`
    .MuiPaper-root {
        :hover {
            #card-action {
                opacity: 1;
            }
        }
    }    
`);

export const Card = styled(CardMui)(
	({ theme }) =>`
    position: relative;
    border-radius: ${theme.spacing(1)} ${theme.spacing(1)};
`);

export const CardHeader = styled("div")(
	({ theme }) =>`
        display: grid;
        grid-template-columns: ${theme.spacing(2)} 1fr;
        align-items: center;
        gap: ${theme.spacing(1)};
`);

export const CardContent = styled(CardContentMui)(
	({ theme }) => `
        p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
        }

        .MuiTypography-body1 {
            -webkit-line-clamp: 1;
        }

        p:nth-of-type(2) {
            width: ${theme.spacing(26)};
        }
`);

export const CardDot = styled("div")<ICardDotStyle>(
	({ theme, color }) => `
        width: ${theme.spacing(2)};
        height: ${theme.spacing(2)};
        background-color: ${color};     
        border-radius: 100%;
`);

export const CardAction = styled("div")(
	({ theme }) => `
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255, 0, 0, 0) 0%, 
            ${theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[50]} 100%);
        opacity: 0;
        transition: .3s;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        justify-content: end;
        padding: ${theme.spacing(1)} ${theme.spacing(0.5)};
`);
