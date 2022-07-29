import { styled } from "@mui/material";

export const Aside = styled("aside")(
	({ theme }) => `        
        position: relative;
        background-color: ${theme.palette.common.black};
        height: 100vh;
        width: ${theme.spacing(25)};
        padding: ${theme.spacing(2)};
        
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

export const AsideHeader = styled("div")(
	({ theme }) => `        
        margin-top: ${theme.spacing(0.8)};
        margin-bottom: ${theme.spacing(6)};

        .MuiIconButton-root {
            position: absolute;
            right: ${theme.spacing(1.8)};
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

export const TreeViewContainer = styled("div")(
	({ theme }) => `        
        margin-top: ${theme.spacing(5)};    
    `
);