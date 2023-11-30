import { styled } from "@mui/material";

export const CardActionContainer = styled("div")(
	({ theme }) => `
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(255, 0, 0, 0) 0%, 
            ${theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.grey[50]} 100%);
        opacity: 0;
        transition: .3s;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        justify-content: end;
        padding: ${theme.spacing(1)} ${theme.spacing(0.5)};
`);
