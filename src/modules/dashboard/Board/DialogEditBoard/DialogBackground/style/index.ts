import { Menu as MenuMui, styled } from "@mui/material";
import { IDialogBackgroundStyle } from "./types/DialogBackground.style";

export const DialogBackground = styled("div")<IDialogBackgroundStyle>(
	({ theme, backgroundimage }) => `
        width: 100%;
        height: ${theme.spacing(15)};
        background: ${theme.palette.grey[900]};
        margin-bottom: ${theme.spacing(3)};     
        padding: ${theme.spacing(2)};
        border-radius: ${theme.spacing(1)};     
        display: flex;
        justify-content: end;
        align-items: baseline;
        
        background-image: linear-gradient(#1a191a82, #1a191a82), url(${backgroundimage});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
        button {
            padding: 5px 0;
            min-width: ${theme.spacing(4.125)};                
            min-height: ${theme.spacing(4.125)};
            border-radius: 100%;
            margin-left: ${theme.spacing(1)};
        }
`
);

export const Menu = styled(MenuMui)(
	({ theme }) => `
        margin-top: ${theme.spacing(1)};
        
        .MuiPaper-root {
            background: ${theme.palette.background.paper};
            border-radius: ${theme.spacing(1)};            
        }    
        
        ul {
            width: ${theme.spacing(40)};
            height: ${theme.spacing(30)};
            padding: ${theme.spacing(2)};

            > div {
                width: 100%;
            }
        }
    `
);

export const MenuImages = styled("div")(
	({ theme }) => `
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-around;
        margin-top: ${theme.spacing(3)};
        position: relative;

        figure {
            margin: 0;

            img {
                object-fit: cover;
                width: ${theme.spacing(10)};
                height: ${theme.spacing(10)};
                border-radius: ${theme.spacing(1)};
                cursor: pointer;
                transition: 0.3s;

                :hover {
                    opacity: 0.3;
                }
            }

            figcaption {
                font-size: ${theme.typography.caption.fontSize};
            }
        }
    `
);

export const MenuImagesFooter = styled("div")(
	({ theme }) => `
        display: flex;
        justify-content: space-between;
        position: sticky;
        bottom: 0rem;
        width: 100%;
        background-color: ${theme.palette.background.paper};
        padding: ${theme.spacing(1, 0)};
    `
);

export const MenuSearch = styled("div")(
	({ theme }) => `
        .MuiFormControl-root  {
            width: 100%;
        }

        > input {
            position: relative;
        }
        
        > button {
            position: absolute;
            right: ${theme.spacing(2.25)};
        }
    `
);