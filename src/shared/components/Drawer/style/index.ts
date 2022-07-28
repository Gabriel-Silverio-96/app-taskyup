import { styled } from "@mui/material";

export const Drawer = styled("div")(
	({ theme }) => `
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        header {
            grid-column: span 3;
        }        
        
        aside {
            grid-row: 1 / 4;
        }

        main {
            grid-column: 4;
        }
    `
);