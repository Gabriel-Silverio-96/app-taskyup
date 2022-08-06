import { styled } from "@mui/material";
import { IAsideStyle } from "./types/Aside.style";

export const Aside = styled("aside")<IAsideStyle>(
	({ open, theme }) => `                
        position: relative;
        background-color: ${theme.palette.common.black};
        height: 100vh;
        width: ${open ? theme.spacing(25) : theme.spacing(7)};
        padding: ${theme.spacing(2)};          
        transition: width 0.2s ease-out;

        .MuiTreeView-root {            
            .MuiTreeItem-root {
                .Mui-selected {
                    background-color: transparent;
                }

                .MuiTreeItem-content {         
                    margin-top: ${theme.spacing(1)};                              
                    padding: ${theme.spacing(0.8)} ${theme.spacing(0.8)} ${theme.spacing(0.8)} 0;
                    :hover {
                        background-color: transparent;
                    }
                }

                .MuiTreeItem-label {
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
            }
        }
    `
);

export const AsideHeader = styled("div")<IAsideStyle>(
	({ open, theme }) => `        
        margin-top: ${theme.spacing(0.8)};
        margin-bottom: ${theme.spacing(6)};

        .MuiIconButton-root {
            position: absolute;
            transform: scale(0.8);
            right: ${open ? theme.spacing(1.8) : `-${theme.spacing(2.2)}`};
            top: ${theme.spacing(2.6)};
            background-color: ${theme.palette.background.paper};

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
            text-decoration: none;
            color: ${theme.palette.text.primary}
        }

        .MuiCollapse-root {
            .MuiCollapse-wrapper {
                height: ${theme.spacing(25)} !important;
                overflow: hidden auto;                

                ::-webkit-scrollbar-thumb {
                    background-color: ${theme.palette.grey[900]};
                    border-radius: 2rem;
                    cursor: all-scroll;
                }

                ::-webkit-scrollbar {    
                    width: ${theme.spacing(0.7)};    
                    height: ${theme.spacing(0.7)};
                    background-color: ${theme.palette.grey[200]};
                    border-radius: 2rem;    
                    cursor: all-scroll;
                }
            }
        }        
    `
);