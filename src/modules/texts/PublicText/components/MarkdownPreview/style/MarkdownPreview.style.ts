import { styled } from "@mui/material";
import { blue, blueGrey, lime } from "@mui/material/colors";

export const MarkdownSectionPreview = styled("section")(    
	({ theme }) => `
        width: 100%;
        margin-bottom: ${theme.spacing(20)};
        
        .bytemd {
            font-family: 'Inter', sans-serif;
            width: 100%;
            inset: 0;
            border: none;
            height: auto !important;      
            background: ${theme.palette.background.default};
            
            .bytemd-body {
                .bytemd-preview {
                    width: 100%;
                    border: 0;
                    color: #cfcfcf;
                    overflow: hidden;

                    .markdown-body {
                        padding: 0; 

                        h1 {
                            font-size: ${theme.spacing(4)};
                        }

                        .bytemd-mermaid {
                            svg {                                
                                background-color: ${theme.palette.grey[200]};
                                border-radius: ${theme.spacing(1)};
                                height: auto;

                                .legend {
                                    rect {
                                        stroke: ${theme.palette.common.black} !important;
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
            }
        }       
    `
);