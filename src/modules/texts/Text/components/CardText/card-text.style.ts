import { styled, Card as CardMui } from "@mui/material";

export const CardContainer = styled("div")(
	() => `
        display: grid;
        gap: 1rem;

        @media (min-width: 576px) {
            grid-template-columns: repeat(2, 1fr);
        }
    
        @media (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
        }
    
        @media (min-width: 992px) {
            grid-template-columns: repeat(6, 1fr);
        }
    
        @media (min-width: 1400px) {
            grid-template-columns: repeat(6, 1fr);
        }
    
        @media (min-width: 1920px) {
            grid-template-columns: repeat(8, 1fr);
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
        
        :hover {
            background-color: ${theme.palette.primary.dark};
        }
    `
);

export const CardTextContainer = styled(CardPatternText)(
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
