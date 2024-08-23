import { styled } from "@mui/material";
import { Link } from "react-router-dom";

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
	() => `                
        margin-top: 10px;
        padding: 5px;
        opacity: 0;
        transition: opacity .3s ease-out;
    `
);

export const TreeItemLabel = styled("div")(
	() => `                
        width: 76px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `
);
