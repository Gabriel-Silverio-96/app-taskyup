import { CardContent as CardContentMui, styled } from "@mui/material/";

export const CardBoardLatestAccessContainer = styled("div")(
	({ theme }) => `
    .MuiPaper-root {
        border-radius: ${theme.spacing(1)};        

        :hover {
            transition: .3s;
            border: 1px solid ${theme.palette.primary.main};
        }
    }
`
);

export const CardContent = styled(CardContentMui)(
	() => `
            p {
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }
    `
);
