import { styled, Theme } from "@mui/material";

export interface IAsideStyle {
	open: boolean;
	smallscreen?: boolean;
}

interface IDefineAsideWidth {
	({
		smallscreen,
		open,
		theme,
	}: {
		smallscreen?: boolean;
		open: boolean;
		theme: Theme;
	}): string;
}

const defineAsideWidth: IDefineAsideWidth = ({ smallscreen, open, theme }) => {
	if (open === false) return theme.spacing(2.5);

	if (smallscreen && open) {
		const asideFullWidth = "calc(100vw / 1.0)";
		return asideFullWidth;
	}

	return theme.spacing(28.75);
};

export const Aside = styled("aside", {
	shouldForwardProp: (prop) => prop !== "smallscreen",
})<IAsideStyle>(
	({ open, theme, smallscreen }) => `                
        position: relative;
        background-color: ${open ? theme.palette.common.black : "transparent"};
        width: ${defineAsideWidth({ smallscreen, open, theme })};
        padding: ${open ? theme.spacing(2) : 0};           
        transition: width 0.2s ease-out;
        border-style: ${open ? "solid" : "none"};
        border-width: ${theme.spacing(0, 0.05, 0, 0)};
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
                    padding: ${theme.spacing(0.8, 0.8, 0.8, 0)};
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
            min-width: ${open ? "inherit" : "0"};
            padding: ${open ? theme.spacing(1, 2) : theme.spacing(0.8)};
            opacity: ${open ? 1 : 0};
            transition: opacity 0.5s ease-in-out;
            transition-delay: 0.05s; 
        }

        .MuiIconButton-root {
            left: ${open ? 0 : theme.spacing(-1.5)};
            top: ${open ? 0 : theme.spacing(0.625)};
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
                    a > li > div .MuiTreeItem-label > div > p {
                        white-space: nowrap;
                        width: 100px;
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
