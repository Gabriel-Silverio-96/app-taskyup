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
        width: 100%;        
        display: flex;
        justify-content: space-between;
        
        > div {             
            .MuiFormControl-root {
                > div {
                    > input {
                        padding-left: 0;
                    }
    
                    > fieldset {
                        border: 0;
                    }
                }
    
            }
        }
    `
);
