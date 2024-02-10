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
                width: 100%;
                
                div:empty {
                    display: none
                }
                
                .Mui-selected {
                    background-color: transparent;
                }

                .MuiTreeItem-content {         
                    margin-top: ${theme.spacing(0.5)};                              
                    padding: ${theme.spacing(0.8)} ${theme.spacing(0.8)} ${theme.spacing(0.8)} 0;
                    border-radius: ${theme.spacing(0.625)};
                    
                    .MuiTreeItem-iconContainer {
                        margin-right: 0;
                    }
                    
                    :hover {
                        background-color: ${theme.palette.background.paper};
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
        display: flex;
        align-items: center;
        gap: ${theme.spacing(1)};

        .MuiButton-root {
            visibility: ${open ? "visible" : "hidden"};
        }

        .MuiButton-root {
            visibility: ${open ? "visible" : "hidden"};
        }

        .MuiIconButton-root {
            left: ${open ? 0 : theme.spacing(-1.5) };
            top: ${open ? 0 : theme.spacing(0.625) };
        }
    `
);


export const TreeViewContainer = styled("div")<IAsideStyle>(
	({ open, theme }) => `        
        margin-top: ${theme.spacing(5)};   
        display: ${open ? "block" : "none"}; 
        overflow-y: auto;
        height: calc(100vh - ${theme.spacing(25)});

        a {
            color: ${theme.palette.text.primary}
        }

        .MuiCollapse-root {
            .MuiCollapse-wrapper {
                .MuiCollapse-wrapperInner {
                    a > li > div .MuiTreeItem-label {
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
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
            }
        }        

        ::-webkit-scrollbar, ::-webkit-scrollbar-thumb {
            visibility: hidden;
		}

        :hover {
            ::-webkit-scrollbar, ::-webkit-scrollbar-thumb {
                visibility: visible;
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