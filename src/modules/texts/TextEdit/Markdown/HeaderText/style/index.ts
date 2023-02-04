import { styled } from "@mui/material";

export const Nav = styled("nav")(    
	({ theme }) => `
        display: flex;
        gap: ${theme.spacing(1)};
        justify-content: flex-end;

        button:first-of-type {
            color: ${theme.palette.common.white};
        }
    `
);

export const TextTitle = styled("div")(
	({ theme }) => `
        display: flex;
        flex-direction: column;
        position: relative;

        > span {
            color: ${theme.palette.error.main};
            position: absolute;
            bottom: -25px;
        }
    `
);

export const Breadcrumbs = styled("div")(
	({ theme }) => `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing(0.8)};

        > span {
            color: ${theme.palette.grey[600]};           
        }
    `
);

export const TextField = styled("input")(
	({ theme }) => `
        font-family: ${theme.typography.fontFamily};
        font-weight: 400;
        font-size: ${theme.spacing(1.5)};
        color: white;
        background: transparent;
        border: 1px solid transparent;        
        border-right: 0;
        border-left: 0;
        border-top: 0;
        padding: ${theme.spacing(0.625, 0)};
        transition: .3s;
        width: min-content;

        :hover {
            border-color: ${theme.palette.grey[700]};
        }

        :focus {
            border-color: ${theme.palette.grey[700]};
        }

        :focus-visible {
            outline: none;
        }
    `
);
