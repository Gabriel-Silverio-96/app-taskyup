import { Button as ButtonMui, styled } from "@mui/material";
import { ITodoStyled } from "./types/NoteTodo.style.types";

export const TodoContainer = styled("div")(
	({ theme }) => `
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: ${theme.spacing(2)};
    `
);

export const Todo = styled("div")<ITodoStyled>(
	({ theme, checked }) => `
    display: grid;
    grid-template-columns: auto 3rem;
    margin-left: -${theme.spacing(0.5)};
    align-items: center;
    background-color: ${checked ? theme.palette.grey[900] : "transparent"};
    border-radius: ${theme.spacing(1)};     
    margin-bottom: ${theme.spacing(1)};
    transition: .5s;

    > div:first-of-type {   
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
    `
);

export const ButtonNewTodo = styled(ButtonMui)(
	({ theme }) => `
        color:${theme.palette.common.white};
    `
);
