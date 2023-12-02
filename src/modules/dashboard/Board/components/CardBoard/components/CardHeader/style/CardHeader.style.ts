import { styled, Menu as MenuMui } from "@mui/material";

export const CardHeaderContainer = styled("div")({
	display: "flex",
	alignItem: "center",
	justifyContent: "space-between",
});

export const Menu = styled(MenuMui)(
	({ theme }) => `    
    
    .MuiPaper-root {
        width: ${theme.spacing(15)};
        border-radius: ${theme.spacing(1)};
        box-shadow: none;
        background: ${theme.palette.background.paper};
    }

        ul > li {
            font-size: ${theme.typography.caption.fontSize};
            padding-bottom: ${theme.spacing(0.5)};

            > svg {
                margin-right: ${theme.spacing(1)};
            }
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
