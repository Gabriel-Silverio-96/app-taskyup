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

        span {
            color: ${theme.palette.error.main};
        }
    `
);

export const TextField = styled("input")(
	({ theme }) => `
        font-family: ${theme.typography.fontFamily};
        font-weight: 800;
        font-size: 1.25rem;
        color: white;
        background: transparent;
        border: 1px solid transparent;        
        padding: 0.5rem 0.8rem;
        transition: .3s;
        width: min-content;

        :hover {
            border-color: ${theme.palette.grey[700]};
        }
    `
);
