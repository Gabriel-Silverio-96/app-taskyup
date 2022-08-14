import { styled } from "@mui/material";

export const Dropdown = styled("div")(
	({ theme }) => `
       position: relative;
       .MuiList-root {
            max-width: ${theme.spacing(28)};
            width: ${theme.spacing(16)};
            position: absolute;
            background: ${theme.palette.background.paper};;
            padding: ${theme.spacing(2)};
            top: ${theme.spacing(5)};
            right: ${theme.spacing(0.9)};
            border-radius: 0.2rem;
            border: 
            ${theme.palette.mode === "light" ? `${theme.spacing(0.1)} solid ${theme.palette.grey[200]}`	: "transparent"};            

            a {
                text-decoration: none;
            }

            li {
                .MuiListItemText-root {
                    .MuiTypography-root {
                        font-size: ${theme.typography.subtitle2.fontSize};
                        color: ${theme.palette.text.primary}
                    }
                }
            }

            li:last-child {
                .MuiListItemText-root {
                    .MuiTypography-root {
                        color: ${theme.palette.error.main}
                    }
                }
            }
       }
    `   
);