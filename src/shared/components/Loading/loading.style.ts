import { styled } from "@mui/material";

export const Loading = styled("div")(
	({ theme }) => `    
        display: flex;
        alignItems: center;
        gap: ${theme.spacing(1)}
    `
);
