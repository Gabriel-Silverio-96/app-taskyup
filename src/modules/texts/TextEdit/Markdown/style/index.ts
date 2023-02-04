import { styled } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";

export const Markdown = styled("section")(    
	({ theme }) => `
        .bytemd {
            font-family: 'Inter', sans-serif;
            top: ${theme.spacing(11)} !important;
            position: fixed;
            inset: 0;
            border: none;
            height: auto !important;      
            background: ${theme.palette.background.paper};
            
            .bytemd-body {
                .bytemd-editor {                    
                    .CodeMirror {
                        background-color: ${theme.palette.background.default};
                        .CodeMirror-scroll {
                            filter: invert(0.85);
                        }
                    }
                }

                .bytemd-preview {
                    border: 0;
                    color: #cfcfcf;

                    .markdown-body {
                        .contains-task-list {
                            list-style: none;
                            padding-left: 0;
                        }

                        blockquote {
                            background-color: ${blueGrey[900]};
                            padding: ${theme.spacing(1)};
                        }

                        a {
                            color: ${blue[400]};
                        }

                        table, td, th {
                            border: 1px solid ${theme.palette.grey[500]};
                        }
                          
                        table {
                            width: 100%;
                            border-collapse: collapse;                            

                            tr {
                                :nth-of-type(even){
                                    background-color: ${theme.palette.grey[800]};;
                                }

                                :hover {
                                    background-color: ${theme.palette.grey[900]};
                                }
                            }
                        }
                    }
                }

                .bytemd-sidebar {
                    border: 0;                    
                    .bytemd-sidebar-close {
                        color: ${theme.palette.common.white};                        
                    }
                    .bytemd-help {
                        h2 {
                            color: ${theme.palette.common.white};
                        }       
                    }

                    .bytemd-toc {
                        h2 {
                            color: ${theme.palette.common.white};
                        }   

                        ul {
                            .bytemd-toc-active {
                                background-color: ${theme.palette.primary.main};
                                color: ${theme.palette.common.white};
                                border-radius: ${theme.spacing(0.5)};
                            }
                        }
                    }
                }
            }

            .bytemd-status {
                border: 0;
                color: ${theme.palette.common.white};
            }

            .bytemd-toolbar {
                background-color: ${theme.palette.background.paper};
                border: 0;

                .bytemd-toolbar-tab-active {
                    color: ${theme.palette.primary.main} !important;
                }

                .bytemd-toolbar-tab {
                    color: ${theme.palette.common.white};
                }

                @media (min-width: 799px) {
                    .bytemd-toolbar-right {
                        .bytemd-toolbar-icon:last-child {
                            display: none;
                        }
                    }
                }

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
        }       
    `
);