import { styled } from "@mui/material";

export const Markdown = styled("section")(    
	({ theme }) => `
        .bytemd {
            font-family: 'Inter', sans-serif;
            top: ${theme.spacing(11)} !important;
            position: fixed;
            inset: 0;
            border: none;
            height: auto !important;      
            

            .bytemd-toolbar {
                background-color: ${theme.palette.common.black};

                .bytemd-toolbar-left {
                    .bytemd-toolbar-icon {
                        svg {
                            color: ${theme.palette.common.white};
                        }
                        :hover {
                            background-color: ${theme.palette.primary.main};
                        }
                    }
                }
                
                .bytemd-toolbar-right {
                    .bytemd-toolbar-icon {
                        svg {
                            color: ${theme.palette.common.white};
                        }
                        :hover {
                            background-color: ${theme.palette.primary.main};
                        }
                    }

                    div:nth-of-type(5), div:nth-of-type(6) {
                        display: none;
                    }
                }

            .tippy-content {
                padding: 0;
            }

            .bytemd-dropdown {
                background-color: ${theme.palette.background.paper};
                color: ${theme.palette.common.white};

                .bytemd-dropdown-title {
                    display: none;
                }

                .bytemd-dropdown-item {                    
                    :hover {
                        color: ${theme.palette.primary.main};
                        background-color: transparent;
                    }
                }
            }
        }       
    `
);