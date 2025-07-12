import { styled, Theme } from "@mui/material";
import { Link } from "react-router-dom";

export interface IEmojiStyle {
	theme?: Theme;
	src: string;
}

export const TreeItemContainer = styled("div")(
	() => `                
        display: flex;
        align-items: flex-start;

        &:hover {
            a {
                opacity: 1;
            } 
        }
    `
);

export const LinkIcon = styled(Link)(
	({ theme }) => `                
        margin-top: ${theme.spacing(1.25)};
        padding: ${theme.spacing(0.625)};
        opacity: 0;
        transition: opacity .3s ease-out;
    `
);

export const TreeItemLabel = styled("div")(
	({ theme }) => `                
        width: ${theme.spacing(9.5)};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `
);

const defineDisplay = (src: string) => (src ? "block" : "none");

export const EmojiIndicator = styled("span")<IEmojiStyle>(
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
