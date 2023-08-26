import { styled } from "@mui/material";

export const TodoContainer = styled("div")(
	() => `
        display: flex;
        flex-direction: column;
        width: 100%;
    `
);

export const Todo = styled("div")(
	() => `
    display: grid;
    grid-template-columns: auto 3rem;
    
    > div {   
        display: flex;

        .MuiCheckbox-root {
            padding-left: 0;
        }
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
    `
);
