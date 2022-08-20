import { Card as CardMui, styled } from "@mui/material";
import { ICardBarStyle } from "./types/CardNote.style";

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
    border-radius: ${theme.spacing(1)} ${theme.spacing(1)} 0 0;
`);

export const CardBar = styled("div")<ICardBarStyle>(
	({ theme, color }) => `
        width: 100%;
        height: ${theme.spacing(0.6)};
        background-color: ${color};     
        position: absolute;
        bottom: 0;
        right: 0;  
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
        align-items: baseline;
        justify-content: end;
        padding: ${theme.spacing(1)} ${theme.spacing(0.5)};
`);
