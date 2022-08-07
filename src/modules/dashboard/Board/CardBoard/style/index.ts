import { styled } from "@mui/material";

export const CardBoardContainer = styled("div")(
	({ theme }) => `
    .MuiPaper-root {
        border: 1px solid transparent;
        :hover {
            transition: .3s;
            border-color: ${theme.palette.primary.main};
        }
    }

    a {
        color: ${theme.palette.text.primary}
    }
`
);

export const CardIcon = styled("div")(
	({ theme }) => `
        display: flex;
        align-item: center;
        gap: ${theme.spacing(1)}; 
        text-transform: capitalize
    `
);

export const CardHeader = styled("div")({
	display: "flex",
	alignItem: "center",
	justifyContent: "space-between"
});