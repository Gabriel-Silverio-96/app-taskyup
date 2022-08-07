import { styled } from "@mui/material";

export const Drawer = styled("div")(
	({ theme }) => `
        display: grid;
        grid-template-columns: repeat(3, 0fr);

        header {
            grid-column: span 3;
        }        
        
        aside {
            grid-row: 1 / 4;
        }

        section {
            grid-column: 4;
        }
    `
);