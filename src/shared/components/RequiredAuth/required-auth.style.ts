import { styled, Box as MuiBox } from "@mui/material";

export const Box = styled(MuiBox)(
	({ theme }) => `
        flex-grow: 1;
        overflow: auto;
        height: calc(100vh - 67px);
        padding: ${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(16)};
    `
);
