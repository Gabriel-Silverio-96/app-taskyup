import { styled } from "@mui/material";

export const TodoCountContainer = styled("div")(
	({ theme }) => `
        display: flex;
        gap: 4px;
        color: ${theme.palette.grey[700]};
`
);
