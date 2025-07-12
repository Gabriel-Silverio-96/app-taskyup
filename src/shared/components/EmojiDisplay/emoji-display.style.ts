import { styled, Theme } from "@mui/material";

export interface IEmojiDisplayContainerStyle {
	theme?: Theme;
	src: string;
}

const defineDisplay = (src: string) => (src ? "block" : "none");

export const EmojiDisplayContainer = styled(
	"span"
)<IEmojiDisplayContainerStyle>(
	({ theme, src }) => `        
        display: ${defineDisplay(src)};
        background-image: url(${src});  
        width: ${theme.spacing(2.375)};
        height: ${theme.spacing(2.375)};
        background-position: center;
        background-size: 100%;
        background-repeat: no-repeat;   
`
);
