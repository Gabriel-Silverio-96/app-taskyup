import { styled } from "@mui/material";

export const DrawerContainer = styled("div")(
	() => `
        display: grid;
        grid-template-columns: repeat(3, 0fr);

        header {
            grid-column: span 4;
        }        
        
        section {
            grid-column: 4;
        }
    `
);
