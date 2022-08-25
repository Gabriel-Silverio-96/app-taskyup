import { styled } from "@mui/system";

export const ColorPickerContainer = styled("div")(
	({ theme }) => `
        cursor: pointer;
	    display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: flex-end;
        gap: ${theme.spacing(1)};        
        width: fit-content;

        input {
            cursor: pointer;
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            background: none;
            border: ${theme.spacing(0.4)} solid ${theme.palette.grey[100]};
            border-radius: 100%;
            cursor: pointer;
            width: ${theme.spacing(3.2)};
            height: ${theme.spacing(3.2)};
            padding: 0;
            
            ::-webkit-color-swatch-wrapper {
                padding: 0;
                border-radius: 100%;
            }
            
            ::-webkit-color-swatch{
                border: 0;
                border-radius: 100%;
            }
            
            ::-moz-color-swatch,
            ::-moz-focus-inner{
                border: 0;
                border-radius: 100%;
            }
            
            ::-moz-focus-inner{
                padding: 0;
                border-radius: 100%;
            }
        }
	`
);