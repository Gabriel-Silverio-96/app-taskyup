import { styled, Card as CardMui } from "@mui/material";

export const CardContainer = styled("div")(    
	() => `
        display: grid;
        gap: 1rem;

        @media (min-width: 1920px) {
            grid-template-columns: repeat(8, 1fr) !important;
        }

        @media (min-width: 1400px) {
            grid-template-columns: repeat(6, 1fr);
        }

        @media (max-width: 1400px) {
            grid-template-columns: repeat(6, 1fr);
        }

        @media (max-width: 992px) {
            grid-template-columns: repeat(4, 1fr);
        }
    
        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 576px) {
            grid-template-columns: repeat(1, 1fr);
        }    
    `
);

export const CardPatternText = styled(CardMui)(
	({ theme }) => `
        width: auto;
        height: ${theme.spacing(30)};
        border-radius: ${theme.spacing(1)};
    `
);

export const CardCreateText = styled(CardPatternText)(    
	({ theme }) => `
        background-color: ${theme.palette.primary.main};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: ${theme.spacing(1)};        
        cursor: pointer;
        transition: .3s;
        border: ${theme.spacing(0.2)} solid transparent;
        
        :hover {
            border-color: ${theme.palette.primary.main};
            background-color: ${theme.palette.background.paper};
        }
    `
);

export const CardText = styled(CardPatternText)(    
	({ theme }) => `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: ${theme.spacing(2)};
        padding: ${theme.spacing(2)};

        :hover {
            > div {
                opacity: 1;
            }
        }
    `
);

export const CardHeader = styled("div")(    
	() => `
        text-align: right;          
        opacity: 0;
        transition: .3s;
        cursor: pointer;
    `
);

export const CardContent = styled("div")(    
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
