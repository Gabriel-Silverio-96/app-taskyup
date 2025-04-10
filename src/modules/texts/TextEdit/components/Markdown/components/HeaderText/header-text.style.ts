import { styled, Theme } from "@mui/material";

interface IBreadcrumbsStyle {
	titleboard: string;
}

export const Nav = styled("nav")(
	({ theme }) => `
        display: flex;
        gap: ${theme.spacing(2)};
        justify-content: flex-end;
        align-items: center;

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

const defineWidth = (titleboard: string, theme: Theme) =>
	titleboard.length > 10 ? theme.spacing(8.2) : "auto";

export const Breadcrumbs = styled("div")<IBreadcrumbsStyle>(
	({ theme, titleboard }) => `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacing(0.8)};

        > span {
            color: ${theme.palette.grey[600]};   
            width: ${defineWidth(titleboard, theme)};        
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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

export const Slash = styled("div")(
	() => `
        width: auto
    `
);
