import { styled } from "@mui/material";

export const Markdown = styled("section")(    
	({ theme }) => `
        .bytemd {
            top: ${theme.spacing(11)} !important;
            position: fixed;
            inset: 0;
            border: none;
            height: 100vh !important;      
            filter: invert(1);
        }
       
    `
);