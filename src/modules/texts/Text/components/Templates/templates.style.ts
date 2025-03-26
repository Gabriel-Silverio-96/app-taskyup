import { styled } from "@mui/material";

export interface ITemplateContainerStyled {
	open: boolean;
}

export const TemplateContainer = styled("section")<ITemplateContainerStyled>(
	({ open }) => `
        display: ${open ? "block" : "none"};       
        position: relative;
    `
);

export const Templates = styled("div")(
	({ theme }) => `
        width: auto;
        height: ${theme.spacing(31.25)};
        padding: ${theme.spacing(3)}; 
        border-radius: ${theme.spacing(1)};
        background-color: ${theme.palette.grey[900]};
        margin-bottom: ${theme.spacing(3)};        
        overflow-y: hidden;                       
        
        ::-webkit-scrollbar {
            width: 0 !important;
            height: 0 !important;
            background:transparent !important;
        }
        ::-webkit-scrollbar-thumb {
            background:transparent !important;
        }

        > div {
            display: flex; 
            gap: ${theme.spacing(2)};                  
        }

        > span {
            margin-bottom: ${theme.spacing(1)};
            display: block;
        }              
    `
);

export const TemplateLinearGradient = styled("div")(
	({ theme }) => `                    
        width: ${theme.spacing(15)};
        height: ${theme.spacing(29)};
        background: linear-gradient(90deg, rgba(255, 0, 0, 0) 0%,
            ${theme.palette.grey[900]} 100%);
        border-radius: ${theme.spacing(1)};
        position: absolute;
        top: ${theme.spacing(1)};
        right: 0px;
    `
);
