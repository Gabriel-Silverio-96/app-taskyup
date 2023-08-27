import { styled } from "@mui/material";

export const TodoContainer = styled("div")(
	() => `
        display: flex;
        flex-direction: column;
        width: 100%;
    `
);

export const Todo = styled("div")(
	({ theme }) => `
    display: grid;
    grid-template-columns: auto 3rem;
    margin-left: -${theme.spacing(0.5)};
    align-items: center;
    
    > div:first-child {   
        display: flex;

            .MuiFormControl-root {
                > div {
                  
                    > input {
                        padding-left: 0;
                        width: 100%;
                    }
    
                    > fieldset {
                        border: 0;
                    }
                }
    
            }
        }

    > div:last-child {  
        text-align: right;
    }

    `
);
