import { styled } from "@mui/material";
import { IAsideStyle } from "./types/Aside.style";

export const Aside = styled("aside")<IAsideStyle>(
	({ open, theme }) => `                
        position: relative;
        background-color: ${open ? theme.palette.common.black : "transparent"};
        width: ${open ? theme.spacing(25) : theme.spacing(7)};
        padding: ${theme.spacing(2)};          
        transition: width 0.2s ease-out;
        border-style: ${open ? "solid" : "none"};
        border-width: ${theme.spacing(0, 0.0500, 0, 0)};
        border-color: ${theme.palette.grey[900]};

        .MuiTreeView-root {            
            .MuiTreeItem-root {
                .Mui-selected {
                    background-color: transparent;
                }

                .MuiTreeItem-content {         
                    margin-top: ${theme.spacing(0.5)};                              
                    padding: ${theme.spacing(0.8)} ${theme.spacing(0.8)} ${theme.spacing(0.8)} 0;
                    :hover {
                        background-color: transparent;
                    }
                }

                .MuiTreeItem-label {
                    font-size: 0.8rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
            }
        }

        width: ${open ? theme.spacing(25) : theme.spacing(1)};
        padding: ${open ? theme.spacing(2) : 0};            

        > button {
            display: ${open ? "flex" : "none"};
        }

        > div {
            a {
                display: ${open ? "flex" : "none"};
            }
        }
    `
);

export const AsideHeader = styled("div")<IAsideStyle>(
	({ open, theme }) => `        
        margin-top: ${theme.spacing(0.8)};
        margin-bottom: ${theme.spacing(6)};

        a {
            width: fit-content;
        }

        .MuiIconButton-root {
            position: absolute;
            transform: scale(0.8);
            right: ${open ? theme.spacing(1.8) : `-${theme.spacing(3.2)}`};
            top: ${theme.spacing(2.125)};
            
            :hover {
                background-color: ${theme.palette.primary.main};
                svg {
                    stroke: ${theme.palette.common.white};
                }
            }
        }

    `
);

export const TreeViewContainer = styled("div")<IAsideStyle>(
	({ open, theme }) => `        
        margin-top: ${theme.spacing(5)};   
        display: ${open ? "block" : "none"}; 

        a {
            color: ${theme.palette.text.primary}
        }

        .MuiCollapse-root {
            margin-left: 0;

            .MuiCollapse-wrapper {
                max-height: ${theme.spacing(25)} !important;
                overflow: hidden auto;   
                
                .MuiCollapse-wrapperInner {
                    a > li > div .MuiTreeItem-label {
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                ::-webkit-scrollbar-thumb {
                    background-color: ${theme.palette.grey[900]};
                }

                ::-webkit-scrollbar {    
                    width: ${theme.spacing(0.7)};    
                    height: ${theme.spacing(0.7)};
                }
                
                :before {
                    content: "";
                    position: absolute;
                    z-index: 1;
                    left: 0;
                    pointer-events: none;
                    background-image: 
                        linear-gradient(0deg, rgb(0 0 0 / 0%) 20%, 
                        ${theme.palette.mode === "dark" ? theme.palette.common.black : theme.palette.common.white} 100%
                    );
                    height: ${theme.spacing(4)};
                    width: 100%;
                }
            }
        }        
    `
);

export const TreeViewContainerItem = styled("div")(
	({ theme }) => `                
            ul {
                padding: 0;
                list-style: none;

                li {
                    display: flex;
                    align-items: center;
                    gap: ${theme.spacing(1)};                 

                    > svg path {
                        stroke: ${theme.palette.common.white}
                    }
                }
            }
        }
    `
);