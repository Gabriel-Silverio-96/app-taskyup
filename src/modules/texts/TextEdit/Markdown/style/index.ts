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

                    .button-type-header {
                        .drop-wrap {
                            background-color: ${theme.palette.background.paper};
                            border: 0;

                            .header-list {
                                .list-item {
                                    color: ${theme.palette.grey[600]};

                                    :hover {
                                        background-color: transparent;
                                        color: ${theme.palette.primary.main};
                                    }
                                }
                            }
                        }
                    }

                    .button-type-table {
                        .drop-wrap {
                            background-color: ${theme.palette.background.paper};
                            border: 0;

                            .table-list {
                                .list-item {
                                    background-color: ${theme.palette.grey[600]};
                                }
                                
                                .active {
                                    background-color: ${theme.palette.primary.light};
                                }
                            }
                        }
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

