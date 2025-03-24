import { styled } from "@mui/material";

export const CardContentContainer = styled("div")(
	({ theme }) => `
        min-height: ${theme.spacing(14)};
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            word-break: break-word;
        }
    `
);
