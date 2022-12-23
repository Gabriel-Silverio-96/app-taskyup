import { styled } from "@mui/material";
import { IDialogBackgroundStyle } from "./types/DialogBackground.style";

export const DialogBackground = styled("div")<IDialogBackgroundStyle>(
	({ theme, backgroundImage }) => `
        width: 100%;
        height: ${theme.spacing(15)};
        background: ${theme.palette.grey[900]};
        margin-bottom: ${theme.spacing(2)};     
        padding: ${theme.spacing(2)};
        border-radius: ${theme.spacing(1)};     
        display: flex;
        justify-content: end;
        align-items: baseline;
        
        background-image: url(${backgroundImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
        button {
            padding: 5px 0;
            min-width: ${theme.spacing(4.125)};                
            min-height: ${theme.spacing(4.125)};
            border-radius: 100%;
        }
`
);
