import { styled } from "@mui/material";
import { ITemplatesStyled } from "./types";

export const Templates = styled("section")<ITemplatesStyled>(
	({ theme, open }) => `
        width: auto;
        height: ${theme.spacing(30)};
        padding: ${theme.spacing(5)}; 
        border-radius: ${theme.spacing(1)};
        background-color: ${theme.palette.grey[900]};
        border: 1px solid ${theme.palette.grey[800]};
        margin-bottom: ${theme.spacing(3)};
        display: ${open ? "flex" : "none"};
        gap: ${theme.spacing(2)};        
    `
);

export const CardTemplate = styled("div")(
	() => `
          cursor: pointer;
          width: min-content;
          transition: .3s;         
    `
);

export const CardContent = styled("div")(
	({ theme }) => `
        width: ${theme.spacing(19)};
        height: ${theme.spacing(19)};
        border-radius: ${theme.spacing(1)};
        background-color: ${theme.palette.grey[800]};        
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;

        :hover {
            outline: 1px solid ${theme.palette.primary.main};            
        }
    `
);