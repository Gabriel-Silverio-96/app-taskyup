import { styled } from "@mui/material";
import { blue, blueGrey, lime } from "@mui/material/colors";

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
                        h1 {
                            font-size: ${theme.spacing(4)};
                        }

                        .bytemd-mermaid {
                            svg {                                
                                g {
                                    .pieTitleText {
                                        fill: ${theme.palette.common.white} !important;
                                    }
                                }
                                .legend {
                                    text {
                                        fill: ${theme.palette.common.white} !important;
                                    }
                                }
                            }
                        }

                        .contains-task-list {
                            list-style: none;
                            padding-left: 0;

                            .task-list-item {
                                display: flex;
                                align-items: center;
                                gap: ${theme.spacing(1)};

                                input:not(:checked) {
                                    opacity: 0.3;
                                }

                                input:checked {
                                    -webkit-appearance: none;
                                    -moz-appearance: none;
                                    background: ${blue[500]};
                                    border-radius: ${theme.spacing(0.2)};
                                    height: 13px;
                                    width: 13px;
                                }
                            }
                        }

                        p {
                            code {
                                background-color: ${theme.palette.grey[200]};
                                color: ${theme.palette.common.black};
                                padding: ${theme.spacing(0.3)};
                                border-radius: ${theme.spacing(0.3)};
                            }
                        }

                        blockquote, pre {
                            padding: ${theme.spacing(1)};
                            margin: ${theme.spacing(2, 0)};
                            padding: 0;

                            code {
                                background-color: ${blueGrey[50]};
                                filter: invert(1);
                                border-radius: ${theme.spacing(1)};

                                .hljs-keyword {
                                    color:  ${lime[800]};
                                }

                                .hljs-comment {
                                    color: ${theme.palette.grey[500]};
                                }
                            }
                        }

                        a {
                            color: ${blue[500]};
                        }

                        table, td, th {
                            border: 1px solid ${theme.palette.grey[500]};
                            text-align: left;
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
                .bytemd-status-right {
                    label {
                        input:checked {
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            background: ${blue[500]};
                            border-radius: ${theme.spacing(0.2)};
                            height: 13px;
                            width: 13px;
                        }
                    }
                }
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