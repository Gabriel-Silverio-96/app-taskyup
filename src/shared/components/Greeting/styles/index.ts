import { styled } from "@mui/material";

export const GreetingMessage = styled("div")(
	({ theme }) => `
        margin: ${theme.spacing(8, 0, 5)};

        p {
            width: ${theme.spacing(40)};
        }
    `   
);