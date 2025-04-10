import { styled, Typography } from "@mui/material";

export const Nav = styled("nav")(
	({ theme }) => `
        display: flex;
        gap: ${theme.spacing(0.5)};
        justify-content: flex-end;
    `
);

export const TypographyTitle = styled(Typography)(
	() => `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `
);
