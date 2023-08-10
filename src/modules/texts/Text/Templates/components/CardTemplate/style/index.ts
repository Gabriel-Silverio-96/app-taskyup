import { styled } from "@mui/material";

export const CardTemplate = styled("div")(
	() => `
          cursor: pointer;
          width: min-content;
          transition: .3s;           
    `
);

export const CardContent = styled("div")(
	({ theme }) => `
        width: ${theme.spacing(19)};
        height: ${theme.spacing(19)};
        border-radius: ${theme.spacing(1)};
        background-color: ${theme.palette.grey[800]};        
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .3s;

        :hover {
            outline: 1px solid ${theme.palette.primary.main};            
        }
    `
);
