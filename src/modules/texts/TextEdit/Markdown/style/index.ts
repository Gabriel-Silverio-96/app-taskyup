import { styled } from "@mui/material";
import MdEditor from "react-markdown-editor-lite";

export const Markdown = styled(MdEditor)(    
	({ theme }) => `
        height: 100%;
        border: 0; 
        background-color: ${theme.palette.common.black};     

        .rc-md-navigation {
            border: 0;

            .navigation-nav {
                .button-wrap {
                    .button {
                        border-radius: ${theme.spacing(0.5)};     
                        :hover {
                            background-color: ${theme.palette.primary.main};     
                            color: ${theme.palette.common.white};     
                        }   
                    }
                    .button-type-image, .button-type-clear, .button-type-undo, .button-type-redo {
                        display: none;
                    }
                }
            }
            background-color: ${theme.palette.background.paper};
        }
        .editor-container {
            .sec-md {
                textarea {
                    filter: invert(1);
                    overflow-y: auto !important;
                }
            }

            .sec-html {
                background-color: ${theme.palette.grey[300]};     
            }
        }
    `
);

